import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/ and inlines the built CSS into dist/index.html
      // to eliminate render-blocking CSS requests (saves ~340ms on Mobile 4G).
      {
        name: 'copy-unbundled-src-assets-and-inline-css',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }

          // Inline generated CSS bundle into dist/index.html to eliminate render-blocking stylesheet request
          const indexHtmlPath = path.resolve(distDir, 'index.html');
          const assetsDir = path.resolve(distDir, 'assets');
          if (fs.existsSync(indexHtmlPath) && fs.existsSync(assetsDir)) {
            let html = fs.readFileSync(indexHtmlPath, 'utf8');
            const cssFiles = fs
              .readdirSync(assetsDir)
              .filter((file) => file.endsWith('.css'));

            for (const cssFile of cssFiles) {
              const cssPath = path.resolve(assetsDir, cssFile);
              const cssContent = fs.readFileSync(cssPath, 'utf8');
              const linkRegex = new RegExp(
                `<link[^>]+href=["']/assets/${cssFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`,
                'i'
              );
              if (linkRegex.test(html)) {
                html = html.replace(linkRegex, `<style>${cssContent}</style>`);
              }
            }
            fs.writeFileSync(indexHtmlPath, html, 'utf8');
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
