/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./src/**/*{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        // => @media (min-width: 320px) { ... }

        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '960px',
        // => @media (min-width: 960px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        libre: ['"Gemunu Libre"', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
 },
}
