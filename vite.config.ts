import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const isGHPages = process.env.DEPLOY_TARGET === 'ghpages';

  return {
    // GitHub Pages serves from /Chaturanga/ sub-path.
    // Keep base='/' for local dev / Express server.
    base: isGHPages ? '/Chaturanga/' : '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'esnext',
      sourcemap: false,
      // Minify with esbuild (fast) but keep output clean
      minify: 'esbuild',
      cssMinify: true,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          // Fine-grained manual chunks so each tab lazy-loads only what it needs
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/recharts') || id.includes('node_modules/d3-') || id.includes('node_modules/victory-')) {
              return 'recharts-vendor';
            }
            if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) {
              return 'motion-vendor';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'icons-vendor';
            }
            if (id.includes('node_modules/chess.js')) {
              return 'chess-core';
            }
            if (id.includes('node_modules/canvas-confetti')) {
              return 'confetti';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
