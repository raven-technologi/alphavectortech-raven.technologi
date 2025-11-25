<#!
.SYNOPSIS
    Produce an institutional-grade text snapshot that captures every file in the
    repository plus routing/domain context so future operators need no extra data.
.DESCRIPTION
    When run from anywhere, this script locates the repository root, emits a
    timestamped TXT file (default: ./snapshots/AVT_SNAPSHOT_YYYYMMDD_HHmmss.txt),
    and serializes:
      • Environment metadata (user, machine, OS, Node/PNPM versions if available)
      • Git provenance (branch, commit, remote)
      • Repository tree listing
      • Every file's SHA256 hash, size, and verbatim content
        – Text files: UTF-8 stream
        – Binary files: Base64 payload (reversible)
    The output is a standalone authority of truth for audits, AI agents, or
    incident responders—no other artifacts are required to reconstruct the repo.
.PARAMETER OutputPath
    Optional custom destination for the TXT snapshot. If omitted, a timestamped
    file is written beneath ./snapshots/.
.PARAMETER OpenAfter
    Opens the snapshot in the default editor/viewer once serialization completes.
.PARAMETER IncludeAll
    When supplied, serializes absolutely every file under the repo root,
    including gitignored artifacts (node_modules, build output, etc.).
    Without this switch, only git-tracked + untracked (non-ignored) files are
    recorded so the snapshot remains tractable.
.EXAMPLE
    pwsh ./scripts/generate_master_snapshot.ps1
.EXAMPLE
    pwsh ./scripts/generate_master_snapshot.ps1 -OutputPath C:\Evidence\alpha.txt -OpenAfter
#>
[CmdletBinding()]
param(
    [string]$OutputPath,
    [switch]$OpenAfter,
    [switch]$IncludeAll
)

$ErrorActionPreference = "Stop"

function New-LineWriter {
    param(
        [string]$TargetPath
    )

    return [scriptblock]::Create(@"
param([string[]]`$Lines)
foreach (`$line in `$Lines) {
    Add-Content -LiteralPath '$TargetPath' -Value `$line
}
"@)
}

function Resolve-RepoRoot {
    param(
        [string]$ScriptPath
    )

    $scriptDir = Split-Path -Parent $ScriptPath
    $candidate = Resolve-Path -Path (Join-Path $scriptDir "..")
    return $candidate
}

function Get-RepoMetadata {
    param(
        [string]$RepoRoot
    )

    $meta = [ordered]@{}
    $meta.Branch = $(try { (git -C $RepoRoot rev-parse --abbrev-ref HEAD).Trim() } catch { 'unknown' })
    $meta.Commit = $(try { (git -C $RepoRoot rev-parse HEAD).Trim() } catch { 'unknown' })
    $meta.Remote = $(try { (git -C $RepoRoot remote get-url origin).Trim() } catch { 'unknown' })
    return $meta
}

function Get-RepositoryFiles {
    param(
        [string]$RepoRoot,
        [bool]$IncludeAll
    )

    if ($IncludeAll) {
        return Get-ChildItem -Path $RepoRoot -Recurse -File -Force | Sort-Object FullName
    }

    $paths = @()
    try {
        $tracked = git -C $RepoRoot ls-files
        if ($tracked) { $paths += $tracked }
    } catch {}

    try {
        $untracked = git -C $RepoRoot ls-files -o --exclude-standard
        if ($untracked) { $paths += $untracked }
    } catch {}

    $paths = $paths |
        Where-Object { $_ -and $_.Trim() -ne '' } |
        Sort-Object -Unique

    $files = foreach ($relative in $paths) {
        $fullPath = Join-Path $RepoRoot $relative
        if (Test-Path -LiteralPath $fullPath -PathType Leaf) {
            Get-Item -LiteralPath $fullPath
        }
    }

    return $files | Sort-Object FullName
}

function Test-IsTextFile {
    param(
        [System.IO.FileInfo]$FileInfo
    )

    $textExtensions = @(
        '.ts','.tsx','.js','.jsx','.mjs','.cjs','.json','.md','.txt','.css','.html','.htm',
        '.ps1','.psm1','.sh','.bat','.yml','.yaml','.xml','.svg','.csv','.tsv','.mdx',
        '.lock','.config','.mjson','.tsconfig','.mts','.cts','.scss','.less','.env',
        '.gitignore','.npmrc','.babelrc','.prettierrc','.eslintrc','.prisma','.log'
    )

    if ($textExtensions -contains $FileInfo.Extension.ToLower()) {
        return $true
    }

    # Heuristic: treat files under 4 KB containing only printable chars as text
    if ($FileInfo.Length -le 4096) {
        try {
            $bytes = [System.IO.File]::ReadAllBytes($FileInfo.FullName)
            foreach ($b in $bytes) {
                if ($b -lt 9 -or $b -gt 126) {
                    if ($b -notin 9,10,13) {
                        return $false
                    }
                }
            }
            return $true
        } catch {
            return $false
        }
    }

    return $false
}

function Write-FileContents {
    param(
        [System.IO.FileInfo]$FileInfo,
        [scriptblock]$Writer,
        [string]$RepoRoot
    )

    $relativePath = $FileInfo.FullName.Substring($RepoRoot.Length + 1).Replace('\\','/')
    $hash = (Get-FileHash -Algorithm SHA256 -Path $FileInfo.FullName).Hash
    $size = $FileInfo.Length
    $isText = Test-IsTextFile -FileInfo $FileInfo

    & $Writer @("----- FILE: $relativePath","SIZE: $size bytes","SHA256: $hash")

    if ($isText) {
        $content = Get-Content -LiteralPath $FileInfo.FullName -Raw -Encoding UTF8
        & $Writer @("KIND: TEXT (UTF-8) — verbatim stream follows:","--- BEGIN TEXT ---")
        & $Writer @($content)
        & $Writer @("--- END TEXT ---","")
    }
    else {
        $bytes = [System.IO.File]::ReadAllBytes($FileInfo.FullName)
        $base64 = [System.Convert]::ToBase64String($bytes)
        & $Writer @("KIND: BINARY (Base64) — reversible payload follows:","--- BEGIN BASE64 ---")
        & $Writer @($base64)
        & $Writer @("--- END BASE64 ---","")
    }
}

function Write-DirectoryTree {
    param(
        [string]$RepoRoot,
        [scriptblock]$Writer
    )

    & $Writer @("REPOSITORY TREE (relative paths) — directories listed before files:")

    Get-ChildItem -Path $RepoRoot -Recurse -Force |
        Sort-Object { $_.PSIsContainer -eq $false }, FullName |
        ForEach-Object {
            $relative = $_.FullName.Substring($RepoRoot.Length + 1).Replace('\\','/')
            & $Writer @($relative)
        }

    & $Writer @("")
}

$repoRoot = (Resolve-RepoRoot -ScriptPath $MyInvocation.MyCommand.Path)
$repoRoot = $repoRoot.ProviderPath

Push-Location $repoRoot
try {
    if (-not $OutputPath) {
        $timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
        $snapshotDir = Join-Path $repoRoot 'snapshots'
        if (-not (Test-Path $snapshotDir)) {
            New-Item -ItemType Directory -Path $snapshotDir | Out-Null
        }
        $OutputPath = Join-Path $snapshotDir "AVT_SNAPSHOT_$timestamp.txt"
    }
    else {
        if (-not [System.IO.Path]::IsPathRooted($OutputPath)) {
            $OutputPath = Join-Path $repoRoot $OutputPath
        }
        $OutputPath = [System.IO.Path]::GetFullPath($OutputPath)
        $snapshotDir = Split-Path -Parent $OutputPath
        if (-not (Test-Path $snapshotDir)) {
            New-Item -ItemType Directory -Path $snapshotDir | Out-Null
        }
    }

    if (Test-Path $OutputPath) {
        Remove-Item $OutputPath
    }
    New-Item -ItemType File -Path $OutputPath | Out-Null

    $writer = New-LineWriter -TargetPath $OutputPath
    $gitMeta = Get-RepoMetadata -RepoRoot $repoRoot
    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss K'

    $nodeVersion = $(try { (node -v).Trim() } catch { 'unavailable' })
    $npmVersion = $(try { (npm -v).Trim() } catch { 'unavailable' })

    & $Writer @(
        '================================================================================',
        'ALPHA VECTOR TECHNOLOGIES | MASTER REPOSITORY SNAPSHOT',
        '================================================================================',
        "GENERATED: $timestamp",
        "ROOT: $repoRoot",
        "USER: $env:USERNAME",
        "MACHINE: $env:COMPUTERNAME",
        "OS: $([System.Environment]::OSVersion.VersionString)",
        "NODE: $nodeVersion",
        "NPM: $npmVersion",
        "GIT BRANCH: $($gitMeta.Branch)",
        "GIT COMMIT: $($gitMeta.Commit)",
        "GIT REMOTE: $($gitMeta.Remote)",
        '================================================================================',''
    )

    Write-DirectoryTree -RepoRoot $repoRoot -Writer $writer

    $allFiles = Get-RepositoryFiles -RepoRoot $repoRoot -IncludeAll:$IncludeAll
    $fileCount = $allFiles.Count
    $totalBytes = ($allFiles | Measure-Object -Property Length -Sum).Sum

    $scope = if ($IncludeAll) { 'COMPLETE TREE (including gitignored/vendor artifacts)' } else { 'VERSIONED + UNTRACKED (git-managed scope)' }

    & $writer @(
        "TOTAL FILES: $fileCount",
        "TOTAL BYTES: $totalBytes",
        "SCOPE: $scope",
        "INCLUDE_ALL FLAG: $IncludeAll",
        "",
        'SERIALIZED FILES:'
    )

    foreach ($file in $allFiles) {
        Write-FileContents -FileInfo $file -Writer $writer -RepoRoot $repoRoot
    }

    & $writer @('END OF SNAPSHOT','================================================================================')
}
finally {
    Pop-Location | Out-Null
}

if ($OpenAfter) {
    Start-Process -FilePath $OutputPath
}

Write-Host "Snapshot written to $OutputPath"
