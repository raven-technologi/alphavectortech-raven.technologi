<#
.SYNOPSIS
    Generates an institutional-grade consolidated project archive.
    
.DESCRIPTION
    This script traverses the project workspace and compiles a comprehensive, 
    single-file documentation artifact. It includes a structural manifest, 
    metadata, and the verbatim content of all source code and documentation files.
    Designed for archival, audit, and LLM context loading purposes.

.NOTES
    Project: Alpha Vector Technologies
    Classification: INTERNAL TOOLING
    Author: GitHub Copilot
    
.EXAMPLE
    .\generate-archive.ps1 -OutputFile "AVT_COMPLETE_ARCHIVE_2025.txt"
#>

param (
    [string]$OutputFile = "COMPLETE_PROJECT_DOCUMENTATION.txt",
    [string[]]$IncludeExtensions = @(".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".md", ".txt"),
    [string[]]$ExcludePatterns = @("node_modules", ".git", ".next", "out", "package-lock.json", "yarn.lock", "dist", ".vscode")
)

$RootPath = Get-Location
$Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$User = [System.Environment]::UserName

# Initialize Output
$Header = @"
================================================================================
ALPHA VECTOR TECHNOLOGIES | INSTITUTIONAL ARCHIVE
================================================================================
GENERATED: $Timestamp
USER:      $User
ROOT:      $RootPath
PURPOSE:   Comprehensive Project Serialization & Knowledge Base
================================================================================

"@

$Header | Out-File -FilePath $OutputFile -Encoding utf8

# Function: Generate File Tree
function Get-FileTree {
    param ($Path, $Indent = "")
    
    $Items = Get-ChildItem -Path $Path | Sort-Object { $_.PSIsContainer } -Descending
    
    foreach ($Item in $Items) {
        # Skip Excluded Patterns
        $Skip = $false
        foreach ($Pattern in $ExcludePatterns) {
            if ($Item.FullName -match [regex]::Escape($Pattern)) { $Skip = $true; break }
        }
        if ($Skip) { continue }

        if ($Item.PSIsContainer) {
            "$Indent[$($Item.Name)]" | Out-File -FilePath $OutputFile -Append -Encoding utf8
            Get-FileTree -Path $Item.FullName -Indent "$Indent  "
        } else {
            if ($IncludeExtensions -contains $Item.Extension) {
                "$Indent- $($Item.Name)" | Out-File -FilePath $OutputFile -Append -Encoding utf8
            }
        }
    }
}

Write-Host "Generating Project Manifest..." -ForegroundColor Cyan
"SECTION 1: PROJECT MANIFEST (FILE TREE)" | Out-File -FilePath $OutputFile -Append -Encoding utf8
"--------------------------------------------------------------------------------" | Out-File -FilePath $OutputFile -Append -Encoding utf8
Get-FileTree -Path $RootPath
"" | Out-File -FilePath $OutputFile -Append -Encoding utf8

# Function: Process Files
Write-Host "Archiving File Contents..." -ForegroundColor Cyan
"SECTION 2: FILE CONTENTS" | Out-File -FilePath $OutputFile -Append -Encoding utf8
"================================================================================" | Out-File -FilePath $OutputFile -Append -Encoding utf8

$Files = Get-ChildItem -Path $RootPath -Recurse | Where-Object { 
    !$_.PSIsContainer -and ($IncludeExtensions -contains $_.Extension) 
}

$FileCount = 0
$TotalLines = 0

foreach ($File in $Files) {
    # Skip Excluded Patterns
    $Skip = $false
    foreach ($Pattern in $ExcludePatterns) {
        if ($File.FullName -match [regex]::Escape($Pattern)) { $Skip = $true; break }
    }
    if ($Skip) { continue }
    
    # Skip the output file itself to avoid recursion loops
    if ($File.Name -eq $OutputFile) { continue }

    $RelativePath = $File.FullName.Substring($RootPath.Path.Length + 1)
    
    Write-Host "Processing: $RelativePath" -ForegroundColor Gray
    
    $Content = Get-Content -Path $File.FullName -Raw
    $LineCount = ($Content | Measure-Object -Line).Lines
    
    $FileHeader = @"

--------------------------------------------------------------------------------
FILE: $RelativePath
TYPE: $($File.Extension.ToUpper().TrimStart('.'))
SIZE: $($File.Length) bytes
LINES: $LineCount
--------------------------------------------------------------------------------
"@
    
    $FileHeader | Out-File -FilePath $OutputFile -Append -Encoding utf8
    $Content | Out-File -FilePath $OutputFile -Append -Encoding utf8
    
    $FileCount++
    $TotalLines += $LineCount
}

# Footer
$Footer = @"

================================================================================
ARCHIVE COMPLETE
================================================================================
TOTAL FILES PROCESSED: $FileCount
TOTAL LINES OF CODE:   $TotalLines
END OF DOCUMENT
================================================================================
"@

$Footer | Out-File -FilePath $OutputFile -Append -Encoding utf8

Write-Host "Success! Archive generated at: $OutputFile" -ForegroundColor Green
Write-Host "Stats: $FileCount files, $TotalLines lines." -ForegroundColor Green
