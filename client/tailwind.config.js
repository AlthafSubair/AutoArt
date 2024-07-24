/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        red: '#dc1616',
      },
      screens:{
        'nl': '945px',
        'ms': '315px'
      }
    },
  },
  plugins: [],
}

