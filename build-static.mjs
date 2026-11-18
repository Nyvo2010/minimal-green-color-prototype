import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

async function buildStaticPages() {
  // Clean dist
  const distDir = path.resolve('dist');
  if (fs.existsSync(distDir)) fs.rmSync(distDir, { recursive: true });
  fs.mkdirSync(distDir, { recursive: true });

  console.log('Building single app for GitHub Pages...');
  
  // Build with GitHub Pages base path
  execSync('npm run build', { 
    stdio: 'inherit', 
    env: { ...process.env, GITHUB_PAGES: "true" } 
  });
  
  // Copy 404.html for GitHub Pages SPA fallback
  if (fs.existsSync(path.resolve('public/404.html'))) {
    fs.copyFileSync(path.resolve('public/404.html'), path.join(distDir, '404.html'));
  }

  console.log('Build complete!');
  console.log(`  dist/index.html -> main app with /v1 and /v2 routes`);
  console.log(`  dist/404.html -> SPA fallback`);
}
buildStaticPages().catch(console.error);