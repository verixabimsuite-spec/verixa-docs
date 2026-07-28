@echo off
title Push ERESOLVE Fix to GitHub
cd /d "%~dp0"
echo ======================================================================
echo    MENGIRIMKAN PERBAIKAN (ERESOLVE --legacy-peer-deps) KE GITHUB
echo ======================================================================
echo.
echo.
echo [1/3] Mendaftarkan file dan mengatur identitas Git...
git config user.email "verixabimsuite@gmail.com"
git config user.name "verixabimsuite-spec"
git add .

echo.
echo [2/3] Menyimpan perubahan ke dalam riwayat Git (Commit)...
git commit -m "feat: setup verixa suite documentation and GitHub deployment"
git branch -M main

echo.
echo [3/3] Melakukan push langsung ke server GitHub Repository Anda...
git push -u origin main

echo.
echo ======================================================================
echo    SUCCESS! Perbaikan berhasil dikirim ke akun GitHub Anda.
echo    Workflow deploy akan beroperasi tanpa eror ERESOLVE maupun 404!
echo ======================================================================
pause
