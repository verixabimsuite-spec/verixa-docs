@echo off
title Rebuild Verixa Suite Website
cd /d "%~dp0"
echo ======================================================================
echo    MEMBANGUN ULANG WEBSITE VERIXA SUITE (NEXT.JS + FUMADOCS)
echo ======================================================================
echo.
echo [1/3] Menghapus file Astro lama (Sistem Lama)...
if exist .astro rmdir /s /q .astro
if exist dist rmdir /s /q dist
if exist node_modules rmdir /s /q node_modules
if exist src rmdir /s /q src
if exist astro.config.mjs del /f /q astro.config.mjs
if exist tsconfig.json del /f /q tsconfig.json
if exist tailwind.config.ts del /f /q tailwind.config.ts

echo.
echo [2/3] Menginstall Next.js dan Fumadocs...
:: Memastikan package.json yang baru saja saya buat diinstall
call npm install --legacy-peer-deps

echo.
echo [3/3] Membuat struktur dasar folder Next.js...
if not exist app mkdir app
if not exist components mkdir components
if not exist content\docs mkdir content\docs
if not exist public mkdir public

echo.
echo ======================================================================
echo    SUKSES! Dependensi dasar Next.js berhasil diinstall.
echo    Silakan kembali ke VS Code agar AI bisa melanjutkan coding.
echo ======================================================================
pause
