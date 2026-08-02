const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\AGS\\Documents\\tutorial plugins';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
  if (file.toLowerCase().endsWith('.png')) {
    const srcFile = path.join(srcDir, file);
    // Replace spaces with hyphens and convert to lowercase for web-friendly names
    let cleanName = file.toLowerCase().replace(/\s+/g, '-');
    const destFile = path.join(destDir, cleanName);
    fs.copyFileSync(srcFile, destFile);
    console.log('Copied:', cleanName);
  }
});
console.log('All PNGs copied successfully!');
