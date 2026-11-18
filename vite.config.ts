import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GitHub Pages repo name - set this to your repo name
const REPO_NAME = "minimal-green-color-prototype";

// For GitHub Pages, base should be /<repo-name>/
// For local dev, base should be /
const base = process.env.GITHUB_PAGES === "true" ? `/${REPO_NAME}/` : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});