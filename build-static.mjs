import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

async function buildStaticPages() {
  // Clean dist
  const distDir = path.resolve('dist');
  if (fs.existsSync(distDir)) fs.rmSync(distDir, { recursive: true });
  fs.mkdirSync(distDir, { recursive: true });

  const versions = [
    { name: 'v1', basePath: '/minimal-green-color-prototype/v1/' },
    { name: 'v2', basePath: '/minimal-green-color-prototype/v2/' },
  ];

  for (const version of versions) {
    console.log(`Building ${version.name}...`);
    
    // Build to a temp directory (not dist)
    const tempDir = path.resolve(`dist-temp-${version.name}`);
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true });
    fs.mkdirSync(tempDir, { recursive: true });
    
    // Build with specific base path and output to temp dir
    execSync(`npm run build -- --outDir=${tempDir}`, { 
      stdio: 'inherit', 
      env: { ...process.env, BASE_PATH: version.basePath } 
    });
    
    // Move build to version folder in dist
    const versionDir = path.join(distDir, version.name);
    fs.mkdirSync(versionDir, { recursive: true });
    
    // Copy from temp to version folder
    const tempAssets = path.join(tempDir, 'assets');
    const tempIndex = path.join(tempDir, 'index.html');
    
    if (fs.existsSync(tempAssets)) {
      fs.cpSync(tempAssets, path.join(versionDir, 'assets'), { recursive: true });
    }
    if (fs.existsSync(tempIndex)) {
      let html = fs.readFileSync(tempIndex, 'utf-8');
      // Fix asset paths to be relative
      html = html.replace(new RegExp(`href="${version.basePath}assets`, 'g'), 'href="./assets');
      html = html.replace(new RegExp(`src="${version.basePath}assets`, 'g'), 'src="./assets');
      fs.writeFileSync(path.join(versionDir, 'index.html'), html);
    }
    
    // Clean up temp directory
    fs.rmSync(tempDir, { recursive: true });
  }

  // Create root index.html - redirect to v2
  // Works for both GitHub Pages (/minimal-green-color-prototype/v2/) and local (./v2/)
  const rootHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colour Palette Test Site</title>
  <script>
    // Detect if we're on GitHub Pages (hostname contains github.io)
    var isGhPages = window.location.hostname.includes('github.io');
    var redirectPath = isGhPages ? '/minimal-green-color-prototype/v2/' : './v2/';
    window.location.href = redirectPath;
  </script>
  <meta http-equiv="refresh" content="0; url=./v2/">
  <link rel="canonical" href="./v2/">
</head>
<body>
  <p>Redirecting to <a href="./v2/">latest version (v2)</a>...</p>
</body>
</html>`;
  fs.writeFileSync(path.join(distDir, 'index.html'), rootHtml);

  // Copy 404.html for GitHub Pages SPA fallback
  if (fs.existsSync(path.resolve('public/404.html'))) {
    fs.copyFileSync(path.resolve('public/404.html'), path.join(distDir, '404.html'));
  }

  console.log('Static build complete!');
  console.log('  dist/index.html -> redirects to v2 (auto-detects GH Pages)');
  console.log('  dist/v1/index.html -> v1 page');
  console.log('  dist/v2/index.html -> v2 page');
}

buildStaticPages().catch(console.error);