/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      navbar: "#b85a23",
      navbarText: "#EAEAEA",
      header: "#b85a23",
      grid: "#EAEAEA",
      contact: "#EAEAEA",
      form: "#B85A23",
      formText: "#EAEAEA",
      button: "#EAEAEA",
      btnText: "#B85A23",
      project: "#EAEAEA",
      home: "#4A1942",
      componentBackground: "#90a27f",
    },
    extend: {},
  },
  plugins: [],
};
