@echo off
title Fix Git Large File Error - Verixa Docs
cd /d "%~dp0"
echo ======================================================================
echo    PERBAIKAN ERROR GIT LARGE FILE (PEMBERSIHAN FILE >100MB)
echo ======================================================================
echo.

echo [1/4] Menghapus file besar dari indeks Git...
git rm -r --cached "image for web" 2>nul

echo [2/4] Mengurutkan ulang commit lokal...
git reset HEAD~1

echo [3/4] Menambahkan kembali file yang valid...
git add .

echo [4/4] Membuat commit bersih baru...
git commit -m "feat: add feature screenshots and documentation updates"

echo.
echo ======================================================================
echo PERBAIKAN SELESAI! Sekarang jalankan ./push_update_to_github.cmd
echo ======================================================================
pause
