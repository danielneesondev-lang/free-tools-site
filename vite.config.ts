import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { glob } from 'glob';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // Get all HTML files as entry points for the build
  const htmlFiles = glob.sync('**/*.html', { ignore: ['node_modules/**', 'dist/**'] }).reduce((acc: any, file) => {
    const name = file.replace(/\.html$/, '').replace(/\//g, '_');
    acc[name] = path.resolve(__dirname, file);
    return acc;
  }, {});

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: htmlFiles,
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
