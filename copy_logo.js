const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\AGS\\.gemini\\antigravity-ide\\brain\\031ae838-f894-4f34-a8fc-f6c83de8c43d\\media__1785331495342.jpg';
const destDir = path.join(__dirname, 'public');
const dest = path.join(destDir, 'verixa-logo.jpg');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Original Verixa logo copied successfully to:', dest);
} else {
  console.error('Source image file not found at:', src);
}

// Copy installer .exe from Output folder to public/downloads
const installerSrc = 'C:\\Users\\AGS\\Documents\\PROJECT PLUGINS\\VERIXA\\VERIXA v1.4_20260725\\Output\\VerixaBimSuite_v1.0.0_Setup.exe';
const downloadsDestDir = path.join(__dirname, 'public', 'downloads');
const installerDest = path.join(downloadsDestDir, 'VerixaBimSuite_v1.0.0_Setup.exe');

if (!fs.existsSync(downloadsDestDir)) {
  fs.mkdirSync(downloadsDestDir, { recursive: true });
}

if (fs.existsSync(installerSrc)) {
  fs.copyFileSync(installerSrc, installerDest);
  console.log('Installer .exe copied successfully to:', installerDest);
} else {
  console.error('Installer .exe source not found at:', installerSrc);
}

