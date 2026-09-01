import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const isGHPages = process.env.DEPLOY_TARGET === 'ghpages';

  return {
    // GitHub Pages serves from /Chaturanga/ sub-path.
    // Use relative base path for Android WebView compatibility.
    base: isGHPages ? '/Chaturanga/' : './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020', // Better compatibility for older WebViews (like Chromium 109)
      sourcemap: false,
      minify: true,
      cssMinify: true,
      cssCodeSplit: false, // Combine CSS for faster loading in WebView
      chunkSizeWarningLimit: 2000,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
