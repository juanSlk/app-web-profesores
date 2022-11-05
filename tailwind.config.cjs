/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/pages/**/*.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        // eslint-disable-next-line quote-props
        'fondo': 'url(/public/img/registro-background-12.svg)'
      },
      colors: {
        // eslint-disable-next-line quote-props
        'primary': '#00a1e4',
        // eslint-disable-next-line quote-props
        'secundary': '#ededed',
        // eslint-disable-next-line quote-props
        'tertiary': '#393E41',
        // eslint-disable-next-line quote-props
        'color-button': '#a2cddf'
      }
      /* fontFamily: {
        notosans: '/public/fonts/NotoSansTelugu-Bold.ttf'
      } */
    }
  },
  plugins: []
}
