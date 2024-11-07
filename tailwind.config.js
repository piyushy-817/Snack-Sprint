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
        caveat: ['Caveat', 'cursive'],// Add Roboto Mono as a custom font
      },
    },
  },
  plugins: [],
}
