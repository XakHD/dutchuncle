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

        'lg': `1280px`,

  
      },
      fontFamily: {
        libre: ['"Gemunu Libre"', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
 },
}
