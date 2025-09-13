/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        PRIMARY: "#006652",
        BG_WHITE: "#f7daa4"
      }
    },
  },
  plugins: [],
}