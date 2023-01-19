/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      navbar: "#4A1942",
      navbarText: "#EAEAEA",
      header: "#4A1942",
      grid: "#EAEAEA",
      contact: "#EAEAEA",
      form: "#EAEAEA",
      button: "#4A1942",
      project: "#EAEAEA",
      home: "#4A1942",
    },
    extend: {},
  },
  plugins: [],
};
