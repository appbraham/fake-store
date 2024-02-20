/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#605DC8',
        'secondary': '#8B89E6',
        'accent': '#e8e7fa',
        'shadow': '#E8E8E8',
        'darky': '#38393d',
      },
      fontFamily:{
        'sans': ['"Be Vietnam Pro"', ...defaultTheme.fontFamily.sans],
        'comfortaa': 'Comfortaa Variable, system-ui',
      },
      backgroundImage:{
        'search': "url('../src/assets/search.svg')"
      },
      gridTemplateColumns:{
        'flow': 'repeat(auto-fit, minmax(260px, 1fr))'
      },
      keyframes:{
        bouncex: {
          '0%': { transform: 'scale(1) rotate(20deg)' },
          '50%': { transform: 'scale(1.2) rotate(-20deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        }
      },
      animation:{
        bouncex: 'bouncex 0.7s ease-in-out'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }){
      addUtilities({
        '.custom-scroll':{
          'scrollbar-color': '#8B89E6 transparent',
          'scrollbar-width': 'thin',
        }
      })
    }),
  ],
}

