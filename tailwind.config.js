/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
