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
        'astra-footer': "url('/assets/footer.jpg')",
        'astra-hero': "url('/assets/hero.jpg')",
        'astra-one': "url('/assets/one.jpg')",
        'astra-two': "url('/assets/two.jpeg')",
        'astra-three': "url('/assets/three.jpg')",
        'astra-four': "url('/assets/four.jpeg')",
        'astra-five': "url('/assets/five.jpeg')",
        'astra-six': "url('/assets/six.jpg')",
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
