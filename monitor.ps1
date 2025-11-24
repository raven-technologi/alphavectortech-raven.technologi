while ($true) {
    $t = Get-Date -Format 'HH:mm:ss'
    $a = if (Test-Path '.activity') { 
        ((Get-Date) - (Get-Item '.activity').LastWriteTime).TotalSeconds 
    } else { 
        999 
    }
    $s = if ($a -lt 15) { 'LIVE' } elseif ($a -lt 30) { 'SLOW' } else { 'HUNG' }
    $icon = if ($a -lt 15) { '🟢' } elseif ($a -lt 30) { '🟡' } else { '🔴' }
    "$icon $s | $t | $([math]::Round($a))s" | Out-File 'PULSE.md' -Encoding utf8
    Start-Sleep -Seconds 5
}
