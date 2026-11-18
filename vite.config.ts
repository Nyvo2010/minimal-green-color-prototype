import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The GitHub Pages project URL is https://<user>.github.io/<repo>/
const REPO_NAME = "minimal-green-color-prototype";

export default defineConfig(({ command }) => ({
  // Production builds are served from the repo subpath; local dev from the root.
  base: command === "build" ? `/${REPO_NAME}/` : "/",
  // Two real pages, not an SPA — unknown paths should 404.
  appType: "mpa",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        v1: path.resolve(__dirname, "v1/index.html"),
        v2: path.resolve(__dirname, "v2/index.html"),
      },
    },
  },
}));
