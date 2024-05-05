/** @type {import('tailwindcss').Config} */
const pxToRem = (px, base = 16) => `${px / base}rem`

export default {
	important: true,
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#3F64ED',
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
