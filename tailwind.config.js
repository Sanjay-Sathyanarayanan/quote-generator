/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        alexBrush:['Alex Brush', 'cursive'],
        poppins:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}