/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-dark': '#0f0f0f',
        'app-card': '#1e1e1e',
        'app-purple': '#2e0b36', 
        'brand-primary': '#a855f7',
        'brand-pink': '#ec4899',
        'brand-yellow': '#fbbf24'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

