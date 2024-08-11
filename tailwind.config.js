
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg':'1080px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        'jean':'rgb(1, 16, 55)',
        'jean2':'rgb(0 57 116)'
      }
    },
  },
  plugins: [],
}

