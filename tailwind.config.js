/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        PRIMARY: "#01a79e",
        BG_WHITE: "#fbf9e6"
      }
    },
  },
  plugins: [],
}