/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      navbar: "#26275d",
      navbarText: "white",
    },
    extend: {
      fontFamily: {
        shine: ["Shine Typewriter"],
      },
    },
  },
  plugins: [],
};
