/** @type {import('tailwindcss').Config} */
const pxToRem = (px, base = 16) => `${px / base}rem`

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary500: '#1A8EFF',
				primary100: '#B2DAFF',
				negative: '#EF4444',
			},
			spacing: {
				...Array.from({ length: 300 }, (_, i) => i).reduce((acc, px) => {
					acc[`${px}pxr`] = pxToRem(px)
					return acc
				}, {}),
			},
		},
	},
	plugins: [],
}
