import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      // অ্যান্ড্রয়েড টিভি এবং পুরোনো ভার্সনের মোবাইলের জন্য পলিফিল তৈরি করবে
      targets: ['defaults', 'not IE 11', 'Android >= 5'],
    }),
  ],
})
