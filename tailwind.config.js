/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      // Configure your color palette here
       'custom-bg-dark':'#070415',
       'darker-1': '#1a202e',
       'darker-2': '#384765',
       'darker-tr': '#00000011',
       'black-50': '#00000099',
       'black-0': '#00000000',
       'light-1': '#F1F1E6',
       'yellow-1': '#EED180',
       'orange-light':'#ffd559',
       'orange-dark':'#ff6f57'
      },
      fontFamily: {
        roboto: "'roboto', sans"
      }
    },
  },
  plugins: [],
}
