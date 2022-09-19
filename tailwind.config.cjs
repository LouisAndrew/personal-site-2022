const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Raleway', sans-serif",
        sora: "'Sora', sans-serif",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
