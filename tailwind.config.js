/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-navy': '#261676',
				blue: '#2463FF',
			},
		},
	},
	plugins: [],
};
