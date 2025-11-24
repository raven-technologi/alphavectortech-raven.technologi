# Alpha Vector Technologies - Build Verification Script
# Run this anytime to check project status

$projectRoot = "C:\Gav_War_Room\alphavectortech-site"
$requiredFiles = @(
    @{Path="src\app\layout.tsx"; MinLines=30; Description="Root Layout"},
    @{Path="src\app\page.tsx"; MinLines=100; Description="Homepage"},
    @{Path="src\app\globals.css"; MinLines=50; Description="Global Styles"},
    @{Path="src\components\Navigation.tsx"; MinLines=40; Description="Navigation"},
    @{Path="src\components\Footer.tsx"; MinLines=50; Description="Footer"},
    @{Path="src\components\ResearchCard.tsx"; MinLines=20; Description="Research Card"},
    @{Path="src\app\research\mens-rea-vector\page.tsx"; MinLines=300; Description="Mens Rea Vector Paper"},
    @{Path="src\app\research\byzantine-calculus\page.tsx"; MinLines=150; Description="Byzantine Calculus Paper"},
    @{Path="src\app\research\sangedha-framework\page.tsx"; MinLines=300; Description="Sangedha Framework Paper"},
    @{Path="src\app\about\page.tsx"; MinLines=50; Description="About Page"},
    @{Path="src\app\contact\page.tsx"; MinLines=50; Description="Contact Page"},
    @{Path="src\app\methodologies\page.tsx"; MinLines=50; Description="Methodologies Page"},
    @{Path="next.config.ts"; MinLines=5; Description="Next.js Config"},
    @{Path="package.json"; MinLines=10; Description="Package JSON"},
    @{Path="tailwind.config.ts"; MinLines=10; Description="Tailwind Config"}
)

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ALPHA VECTOR TECH - BUILD VERIFIER" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$complete = 0
$missing = 0
$incomplete = 0

foreach ($file in $requiredFiles) {
    $fullPath = Join-Path $projectRoot $file.Path
    
    if (Test-Path $fullPath) {
        $lineCount = (Get-Content $fullPath | Measure-Object -Line).Lines
        
        if ($lineCount -ge $file.MinLines) {
            Write-Host "[OK]      " -NoNewline -ForegroundColor Green
            Write-Host "$($file.Description)" -NoNewline
            Write-Host " ($lineCount lines)" -ForegroundColor DarkGray
            $complete++
        } else {
            Write-Host "[PARTIAL] " -NoNewline -ForegroundColor Yellow
            Write-Host "$($file.Description)" -NoNewline
            Write-Host " ($lineCount lines, expected $($file.MinLines)+)" -ForegroundColor Yellow
            $incomplete++
        }
    } else {
        Write-Host "[MISSING] " -NoNewline -ForegroundColor Red
        Write-Host "$($file.Description)" -ForegroundColor Red
        $missing++
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Complete:   $complete" -ForegroundColor Green
Write-Host "Partial:    $incomplete" -ForegroundColor Yellow
Write-Host "Missing:    $missing" -ForegroundColor Red
Write-Host ""

$total = $requiredFiles.Count
$pct = [math]::Round(($complete / $total) * 100)
Write-Host "Progress: $pct% ($complete/$total files)" -ForegroundColor Cyan
Write-Host ""

if ($missing -gt 0 -or $incomplete -gt 0) {
    Write-Host "Next step: Open MASTER_HANDOVER_PROMPT.md and give to Claude" -ForegroundColor Yellow
    Write-Host "Location: $projectRoot\.build-system\MASTER_HANDOVER_PROMPT.md" -ForegroundColor DarkGray
} else {
    Write-Host "All files present! Run 'npm run build' to verify build." -ForegroundColor Green
}

Write-Host ""
