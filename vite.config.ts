import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves the site under /<repo-name>/ — set base so assets resolve.
export default defineConfig({
  base: '/koris-energy-demo/',
  plugins: [react()],
})
