/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    
    screens: {
      'sm': {'max': '767px'}
    }
  },
  plugins: [],
}