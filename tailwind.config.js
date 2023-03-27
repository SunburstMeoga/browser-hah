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
        'gray400': '#151515',
        'grayicon': '#949494',
        'grayword': '#ccc',

        'black100': '#bbb',
        'black200': '#111',
        'black300': '#181818',
        'black400': '#151515',
        'black500': '#171717',

        'border100': '#222',


        'white100': '#ebf0f6',
        'white200': '#f5f5f5',
        'white300': '#fafafa'
      },
      spacing: {
        '100': '100rem'
      },
      minWidth: {
        '100': '100rem',
        '70': '70rem',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
