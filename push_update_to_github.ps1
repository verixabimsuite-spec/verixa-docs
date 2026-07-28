Set-Location -Path $PSScriptRoot
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "   OTOMASI PUSH DOKUMENTASI VERIXA KE GITHUB (POWERSHELL)" -ForegroundColor Cyan
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "[1/4] Mengatur identitas Git..." -ForegroundColor Yellow
git config user.email "verixabimsuite@gmail.com"
git config user.name "verixabimsuite-spec"

Write-Host "[2/4] Mendaftarkan perubahan file..." -ForegroundColor Yellow
git add .

Write-Host "[3/4] Membuat commit..." -ForegroundColor Yellow
git commit -m "feat: setup verixa suite documentation and GitHub deployment"
git branch -M main

Write-Host "[4/4] Melakukan Push ke GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "======================================================================" -ForegroundColor Green
Write-Host "   SUCCESS! Kode berhasil terkirim ke GitHub." -ForegroundColor Green
Write-Host "======================================================================" -ForegroundColor Green
