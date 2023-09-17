/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Kaushan Script",
        secondary:"signature",
        third:"Poppins"
      },
        },
  },
  plugins: [],
}