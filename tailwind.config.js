/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      background: "#f9fafb",
      "light-purple": "#c7a0f9",
      purple: "#7f56d9",
      dark: "#1B152b",
      grey: "#7a7d9c",
      white: colors.slate,
      neutral: colors.neutral,
      stone: colors.stone,
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
