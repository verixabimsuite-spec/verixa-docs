@echo off
cd /d "%~dp0"
echo Running local build test...
npx next build > build_log.txt 2>&1
echo Build finished. Check build_log.txt.
