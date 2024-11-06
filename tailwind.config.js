/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      palanquin: ['Palanquin', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins, sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}