const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      astra: {
        blue: '#1D3557',
        gray: '#B5B5B5',
        pink: '#D32B79',
        teal: '#49BEDF',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      backgroundImage: {
        'astra-footer': "url('./public/assets/footer.jpg')",
        'astra-hero': "url('./public/assets/hero.jpg')",
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
      rotate: {
        20: '20deg',
      },
    },
  },
  plugins: [],
}
