import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Original v1 colors
const v1Colors = {
  paper: '#ffffff',
  paperBox: '#f2f2f3',
  forest: '#2c5f2d',
  moss: '#97bc62',
  base: '#2c5f2d',
  pink: 'rgba(244, 169, 196, 0.95)',
  orange: 'rgba(246, 162, 94, 0.95)',
  lilac: 'rgba(189, 169, 242, 0.85)',
  sky: 'rgba(165, 216, 240, 0.85)',
};

// v2 colors (muted, more pink/cyan, beige paper)
const v2Colors = {
  paper: '#faf9f6',
  paperBox: '#f0efe9',
  forest: '#2c5f2d',
  moss: '#97bc62',
  base: '#2a5a2a',
  pink: 'rgba(244, 169, 196, 0.75)',
  orange: 'rgba(246, 162, 94, 0.5)',
  lilac: 'rgba(189, 169, 242, 0.6)',
  sky: 'rgba(165, 216, 240, 0.75)',
  cyan: 'rgba(100, 200, 220, 0.7)',
};

function generateCSS(colors, version) {
  const blobsV1 = `
    radial-gradient(9% 12% at 74% 9%, var(--lilac) 0%, transparent 100%),
    radial-gradient(10% 14% at 92% 27%, var(--orange) 0%, transparent 100%),
    radial-gradient(15% 20% at 84% 17%, var(--pink) 0%, transparent 100%),
    linear-gradient(115deg, transparent 28%, rgba(151, 188, 98, 0.5) 42%, transparent 58%),
    radial-gradient(38% 45% at 16% 14%, rgba(151, 188, 98, 0.95) 0%, transparent 70%),
    radial-gradient(34% 40% at 60% 38%, rgba(151, 188, 98, 0.35) 0%, transparent 70%),
    radial-gradient(45% 50% at 88% 94%, rgba(18, 18, 19, 0.9) 0%, transparent 72%),
    radial-gradient(40% 40% at 6% 96%, rgba(18, 18, 19, 0.7) 0%, transparent 72%)`;

  const blobsV2 = `
    radial-gradient(12% 15% at 70% 10%, var(--pink) 0%, transparent 100%),
    radial-gradient(10% 12% at 88% 25%, var(--cyan) 0%, transparent 100%),
    radial-gradient(14% 18% at 82% 15%, var(--lilac) 0%, transparent 100%),
    radial-gradient(10% 12% at 15% 85%, var(--sky) 0%, transparent 100%),
    linear-gradient(115deg, transparent 28%, rgba(151, 188, 98, 0.35) 42%, transparent 58%),
    radial-gradient(35% 42% at 18% 16%, rgba(151, 188, 98, 0.7) 0%, transparent 70%),
    radial-gradient(30% 35% at 62% 40%, rgba(151, 188, 98, 0.25) 0%, transparent 70%),
    radial-gradient(45% 50% at 88% 94%, rgba(18, 18, 19, 0.8) 0%, transparent 72%),
    radial-gradient(40% 40% at 6% 96%, rgba(18, 18, 19, 0.6) 0%, transparent 72%)`;

  const blobs = version === 'v2' ? blobsV2 : blobsV1;

  return `@import "tailwindcss";

@import url("https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap");

/* The core palette: 6 colours */
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-serif: "Newsreader", Georgia, "Times New Roman", serif;

  --color-ink: #121213;
  --color-ink-box: #1f1f21;
  --color-paper: ${colors.paper};
  --color-paper-box: ${colors.paperBox};
  --color-forest: ${colors.forest};
  --color-moss: ${colors.moss};
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background: var(--color-paper);
  color: var(--color-ink);
  -webkit-font-smoothing: antialiased;
}

.serif {
  font-family: var(--font-serif);
  letter-spacing: -0.02em;
  font-weight: 430;
  font-variation-settings: "opsz" 96;
}

/* ---------- Grainy gradients ----------
   Green + white dominate. Small splashes of pink / orange / lilac / sky only. */

.grad {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: var(--base);
}

/* colour blobs */
.grad::before {
  content: "";
  position: absolute;
  inset: -10%;
  z-index: 0;
  background: var(--blobs);
  filter: blur(10px) contrast(1.12);
}

/* coarse + fine grain at two scales */
.grad::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: var(--grain, 0.55);
  mix-blend-mode: overlay;
  background-image:
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='n' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncR type='linear' slope='2.6' intercept='-0.8'/><feFuncG type='linear' slope='2.6' intercept='-0.8'/><feFuncB type='linear' slope='2.6' intercept='-0.8'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"),
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='520' height='520'><filter id='n' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.35' numOctaves='3' seed='9' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncR type='linear' slope='2' intercept='-0.5'/><feFuncG type='linear' slope='2' intercept='-0.5'/><feFuncB type='linear' slope='2' intercept='-0.5'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

/* Splash colours (gradients only) */
.grad {
  --pink: ${colors.pink};
  --orange: ${colors.orange};
  --lilac: ${colors.lilac};
  --sky: ${colors.sky};
  --base: ${colors.base};
  --blobs:${blobs};
${colors.cyan ? `  --cyan: ${colors.cyan};` : ''}
}

.soft-shadow {
  box-shadow: 0 30px 60px -20px rgba(18, 18, 19, 0.4), 0 8px 20px -8px rgba(18, 18, 19, 0.15);
}`;
}

async function buildVersion(version, colors, basePath) {
  const cssContent = generateCSS(colors, version);
  const srcDir = path.resolve('src');
  const originalCSS = fs.readFileSync(path.join(srcDir, 'index.css'), 'utf-8');
  
  // Write version-specific CSS
  fs.writeFileSync(path.join(srcDir, 'index.css'), cssContent);
  
  // Update vite config for base path
  const viteConfig = `
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '${basePath}',
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
  `.trim();
  
  fs.writeFileSync(path.resolve('vite.config.ts'), viteConfig);
  
  // Build
  console.log(`Building ${version}...`);
  execSync('npm run build', { stdio: 'inherit' });
  
  // Move dist to version folder
  const distDir = path.resolve('dist');
  const versionDir = path.resolve(`dist-${version}`);
  
  if (fs.existsSync(versionDir)) {
    fs.rmSync(versionDir, { recursive: true });
  }
  fs.renameSync(distDir, versionDir);
  
  // Restore original files
  fs.writeFileSync(path.join(srcDir, 'index.css'), originalCSS);
  fs.writeFileSync(path.resolve('vite.config.ts'), originalViteConfig);
  
  console.log(`${version} built to ${versionDir}`);
}

// Save original vite config
const originalViteConfig = fs.readFileSync(path.resolve('vite.config.ts'), 'utf-8');

async function main() {
  // Clean previous builds
  for (const dir of ['dist-v1', 'dist-v2', 'dist']) {
    const d = path.resolve(dir);
    if (fs.existsSync(d)) fs.rmSync(d, { recursive: true });
  }
  
  await buildVersion('v1', v1Colors, '/v1/');
  await buildVersion('v2', v2Colors, '/v2/');
  
  // Create final dist folder with both versions and root redirect
  const finalDist = path.resolve('dist');
  fs.mkdirSync(finalDist, { recursive: true });
  
  // Copy v1
  fs.cpSync(path.resolve('dist-v1'), path.join(finalDist, 'v1'), { recursive: true });
  // Copy v2
  fs.cpSync(path.resolve('dist-v2'), path.join(finalDist, 'v2'), { recursive: true });
  
  // Create root index.html that redirects to v2 (latest)
  const rootHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colour Palette Test Site</title>
  <meta http-equiv="refresh" content="0; url=/v2/">
  <link rel="canonical" href="/v2/">
</head>
<body>
  <p>Redirecting to <a href="/v2/">latest version (v2)</a>...</p>
  <script>window.location.href = '/v2/';</script>
</body>
</html>`;
  
  fs.writeFileSync(path.join(finalDist, 'index.html'), rootHtml);
  
  console.log('Build complete! Output in dist/');
}

main().catch(console.error);