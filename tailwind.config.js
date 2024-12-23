/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./pulic/pages/**/*.{html, js}",
    // "./src/**/*.{js,ts,jsx,tsx, html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
