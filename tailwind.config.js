/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via the 'dark' class
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLight: 'rgb(90, 56, 56)',  // Custom RGB color
      },
      fontFamily: {
        mono: ['"Roboto Mono"', 'monospace'], 
        ubuntu: ['Ubuntu', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        charm: ['Charm', 'cursive'],
        manrope: ['Manrope', 'sans-serif'],// Add Roboto Mono as a custom font
      },
    },
  },
  plugins: [],
}
