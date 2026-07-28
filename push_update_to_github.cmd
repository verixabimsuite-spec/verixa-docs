@echo off
title Push ke GitHub - Verixa Docs
cd /d "%~dp0"
echo ======================================================================
echo    PUSH VERIXA DOCS KE GITHUB
echo ======================================================================
echo.

echo [1/3] Mengatur identitas Git...
git config user.email "verixabimsuite@gmail.com"
git config user.name "verixabimsuite-spec"
git add .

echo.
echo [2/3] Menyimpan perubahan...
git commit -m "fix: add force-static to search API route for Next.js export"
git branch -M main

echo.
echo [3/3] Push ke GitHub...
git push -u origin main

echo.
echo ======================================================================
echo    DONE! Cek workflow di:
echo    https://github.com/verixabimsuite-spec/verixa-docs/actions
echo ======================================================================
pause
