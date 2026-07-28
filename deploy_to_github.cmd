@echo off
title Verixa Suite Docs - GitHub Deployment Script
cd /d "%~dp0"
echo ======================================================================
echo    OTOMASI DEPLOYMENT RESMI VERIXA SUITE DOCS KE GITHUB
echo ======================================================================

echo.
echo [1/4] Menginisialisasi repositori Git lokal...
git init -b main
if errorlevel 1 (
    echo [ERROR] Git gagal dieksekusi. Pastikan Git terinstal di PATH Windows Anda.
    goto end
)

echo.
echo [2/4] Mendaftarkan seluruh file Markdown, CSS, dan konfirmasi Astro...
git add .

echo.
echo [3/4] Melakukan komit pertama (Initial Commit)...
git commit -m "feat: initial release of Verixa Suite professional documentation (Astro Starlight)"

echo.
echo [4/4] Membuka komunikasi dengan GitHub CLI (gh) dan melakukan Push...
gh repo create verixa-suite-docs --public --source=. --push
if errorlevel 1 (
    echo [ERROR] Gagal membuat repository via GitHub CLI. Pastikan Anda sudah terotorisasi via command: gh auth login
    goto end
)

echo.
echo ======================================================================
echo    SUCCESS! Repository verixa-suite-docs siap di GitHub Anda.
echo ======================================================================
:end
pause
