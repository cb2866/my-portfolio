/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      navbar: "#5A5042",
      navbarText: "white",
      grid: "white",
    },
    extend: {
      fontFamily: {
        shine: ["Shine Typewriter"],
      },
    },
  },
  plugins: [],
};
