@echo off
title Verixa Suite Docs - Local Preview
cd /d "%~dp0"
echo ======================================================================
echo    MEMBUKA WEBSITE DOKUMENTASI VERIXA SECARA LOKAL
echo ======================================================================
echo.
echo Menjalankan Next.js Development Server...
echo Buka browser Anda di: http://localhost:3000/
echo.
npm run dev
pause
