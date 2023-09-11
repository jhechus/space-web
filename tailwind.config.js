/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Dark": "#0B0D17",
        'TextW': '#FFFFFF',
        'Bblue': '#D0D6F9',
        'BgNavbar': '#FFFFFF'
      },
      backgroundColor: {
        'rgba-white-04': '#0B0D17',
      },
    },
  },
  plugins: [],
}
