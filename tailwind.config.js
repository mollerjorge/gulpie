const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gulpieCyan: colors.cyan,
        gray: colors.blueGray,
        black: {
          light: '#AAB0B7',
          DEFAULT: '#858A8F',
          dark: '#333333'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      borderRadius: {
        md: '0.312rem'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      pointerEvents: ['disabled'],
      backgroundColor: ['active'],
      textColor: ['visited', 'active']
    }
  },
  plugins: []
}
