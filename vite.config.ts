import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base so the site works on GitHub Pages for any repo name/path.
export default defineConfig({
  plugins: [react()],
  base: './',
})
