/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { colors_export } = require("./getColors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors_export,
      opacity: {
        8: ".08",
        11: ".11",
        12: ".12",
        14: ".14",
      },
    },
  },
  plugins: [],
};
