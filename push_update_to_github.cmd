@echo off
title Push ke GitHub - Verixa Docs
cd /d "%~dp0"
echo ======================================================================
echo    BUILD LOKAL & PUSH VERIXA DOCS KE GITHUB
echo ======================================================================
echo.

:: Clean up old conflicting cache or routes if present
if exist ".next" rmdir /s /q ".next"
if exist "out" rmdir /s /q "out"
if exist "app\docs\[[...slug]]" rmdir /s /q "app\docs\[[...slug]]"

echo [1/4] Memastikan file logo asli Verixa terpasang...
node copy_logo.js
echo.
echo [1/4] Menguji Build Lokal Next.js...
call npx next build
if %errorlevel% neq 0 (
    echo.
    echo ======================================================================
    echo    ERROR: Build lokal gagal! Perbaiki error di atas sebelum push.
    echo ======================================================================
    pause
    exit /b %errorlevel%
)

echo.
echo [2/4] Mengatur identitas Git...
git config user.email "verixabimsuite@gmail.com"
git config user.name "verixabimsuite-spec"
git add .

echo.
echo [3/4] Menyimpan perubahan...
git commit -m "style: redesign website with Autodesk-inspired clean aesthetic and update installer exe"
git branch -M main

echo.
echo [4/4] Push ke GitHub...
git push -u origin main

echo.
echo ======================================================================
echo    SUKSES! Build lokal LULUS dan perubahan telah di-push.
echo    Cek workflow di: https://github.com/verixabimsuite-spec/verixa-docs/actions
echo ======================================================================
pause
