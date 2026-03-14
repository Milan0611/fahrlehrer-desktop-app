/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'next-level-green': '#A3C614', // Das typische Grün aus deinem Buch
      },
    },
  },
  plugins: [],
}