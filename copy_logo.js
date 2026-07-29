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
