$configPath = "./config.json"
$configContent = Get-Content -Path $configPath -Raw | ConvertFrom-Json
$heartrateTxt = $configContent | ForEach-Object { $_.heartratetxt }

Start-Process $heartrateTxt\MiBand-Heartrate-2.exe
node .