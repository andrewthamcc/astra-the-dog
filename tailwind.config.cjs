/** @type {import('tailwindcss').Config} */
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
    },
    extend: {
      backgroundImage: {
        'astra-hero': "url('./src/assets/hero.jpg')",
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
