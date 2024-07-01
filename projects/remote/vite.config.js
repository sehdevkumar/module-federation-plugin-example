import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'mfe2',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx'
      }
    })
  ],
build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
