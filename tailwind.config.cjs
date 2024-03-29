const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			astra: {
			  blue: '#1D3557',
			  pink: '#D32B79',
			  teal: '#49BEDF',
			},
			white: "#ffffff"
		},
		extend: {},
	},
	plugins: [],
}
