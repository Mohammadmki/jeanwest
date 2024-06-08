/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'jean':'rgb(1, 16, 55)',
        'jean2':'rgb(0 57 116)'
      }
    },
  },
  plugins: [],
}

