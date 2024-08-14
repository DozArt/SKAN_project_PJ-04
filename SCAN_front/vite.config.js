import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SKAN_project_PJ-04/', // Укажи свой путь
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'comp': path.resolve(__dirname, './src/components'),
      'pgs': path.resolve(__dirname, './src/Pages'),
      'img': path.resolve(__dirname, './src/public/images'),
    }
  }
})
