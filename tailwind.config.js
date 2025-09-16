/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        PRIMARY: "#01a79e",
        SECONDARY: "#b2edea",
        BG_WHITE: "#fbf9e6",
        GREY: "#636363",
        LIGHT_GREY: "#e3e8e8",
        ORANGE: "#FFA726",
        LIGHT_GREEN: "#65a198",
      }
    },
  },
  plugins: [],
}