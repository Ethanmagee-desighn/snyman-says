/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#353E3A',
        darkLighter: '#2d3531',
      }
    },
  },
  plugins: [],
}
