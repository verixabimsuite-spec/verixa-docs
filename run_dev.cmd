@echo off
title Verixa Suite Docs - Local Preview
cd /d "%~dp0"
echo ======================================================================
echo    MEMBUKA WEBSITE DOKUMENTASI VERIXA SECARA LOKAL
echo ======================================================================
echo.
echo Menjalankan Astro Development Server...
echo Buka browser Anda di: http://localhost:4321/verixa-docs/
echo.
npm run dev
pause
