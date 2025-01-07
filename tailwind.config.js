/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", //Applies tailwind rules to the main html file
    "./public/pages/*.html", //Applies tailwind rules to the html files in the public/pages directory
    "./*.ts"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  darkMode: false,
}
