/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
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
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
