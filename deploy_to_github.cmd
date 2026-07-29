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
echo.
echo [4/4] Mengirim perubahan ke GitHub...
git push -u origin main
if errorlevel 1 (
    echo.
    echo Menghubungkan ke remote origin...
    git remote remove origin 2>nul
    git remote add origin https://github.com/verixabimsuite-spec/verixa-docs.git 2>nul
    git push -u origin main
)

echo.
echo ======================================================================
echo    SUCCESS! Repository verixa-suite-docs siap di GitHub Anda.
echo ======================================================================
:end
pause
