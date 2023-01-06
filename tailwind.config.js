/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      navbar: "#fab7c4",
      navbarText: "#26275d",
    },
    extend: {
      fontFamily: {
        signika: ["Signika"],
      },
    },
  },
  plugins: [],
};
