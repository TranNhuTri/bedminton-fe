import path from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
