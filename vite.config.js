import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Bunu ./ olarak değiştirdik
  build: {
    assetsDir: 'assets', // Asset'lerin build'de nereye konumlanacağını belirtiyoruz
    outDir: 'dist', // Build çıktı klasörü
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})