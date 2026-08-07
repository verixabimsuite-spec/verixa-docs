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
const outputDir = 'C:\\Users\\AGS\\Documents\\PROJECT PLUGINS\\VERIXA\\VERIXA v1.4_20260725\\Output';
const downloadsDestDir = path.join(__dirname, 'public', 'downloads');

if (!fs.existsSync(downloadsDestDir)) {
  fs.mkdirSync(downloadsDestDir, { recursive: true });
}

if (fs.existsSync(outputDir)) {
  const files = fs.readdirSync(outputDir);
  const exeFiles = files.filter(f => f.toLowerCase().endsWith('.exe'));
  for (const exe of exeFiles) {
    const srcFile = path.join(outputDir, exe);
    fs.copyFileSync(srcFile, path.join(downloadsDestDir, exe));
    fs.copyFileSync(srcFile, path.join(downloadsDestDir, 'VerixaBimSuite_Setup_v1.0.0.exe'));
    fs.copyFileSync(srcFile, path.join(downloadsDestDir, 'VerixaBimSuite_v1.0.0_Setup.exe'));
    console.log(`Installer .exe (${exe}) copied successfully to public/downloads.`);
  }
} else {
  console.error('Output directory not found at:', outputDir);
}

