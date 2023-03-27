module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#f1b434',
        'gray100': '#777b83',
        'gray200': '#2a3037',
        'gray300': '#202a2b',
        'white100': '#ebf0f6'
      },
      animation: {
        wiggle: 'wiggle 1s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'height: 0' },
          '50%': { transform: 'height: 50px' },
          '0%': { transform: 'height: 50px' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
