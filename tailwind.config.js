/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      navbar: "#4A1942",
      navbarText: "white",
      header: "#4A1942",
      grid: "white",
      contact: "white",
      form: "#EAEAEA",
      button: "#4A1942",
    },
    extend: {},
  },
  plugins: [],
};
