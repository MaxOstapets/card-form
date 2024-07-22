/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    
    screens: {
      'sm': {'max': '376px', 'max': '426px'}
    }
  },
  plugins: [],
}