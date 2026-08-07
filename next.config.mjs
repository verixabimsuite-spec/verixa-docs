import fs from 'fs';
import path from 'path';

/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'verixa-docs';
}

// Copy installer .exe if present locally
const installerSrc = 'C:\\Users\\AGS\\Documents\\PROJECT PLUGINS\\VERIXA\\VERIXA v1.4_20260725\\Output\\VerixaBimSuite_v1.0.0_Setup.exe';
const downloadsDestDir = path.join(process.cwd(), 'public', 'downloads');
const installerDest = path.join(downloadsDestDir, 'VerixaBimSuite_v1.0.0_Setup.exe');

if (!fs.existsSync(downloadsDestDir)) {
  fs.mkdirSync(downloadsDestDir, { recursive: true });
}
if (fs.existsSync(installerSrc)) {
  try {
    fs.copyFileSync(installerSrc, installerDest);
    console.log('Installer .exe copied to public/downloads successfully.');
  } catch (err) {
    console.error('Failed to copy installer .exe:', err);
  }
}

const nextConfig = {
  reactStrictMode: true,
  ...(isGithubActions ? { output: 'export' } : {}),
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repo}` : '',
  },
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

