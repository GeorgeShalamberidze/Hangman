/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'main-menu-bg': "url('/src/assets/svg/bg.svg')",
			},
			colors: {
				'dark-navy': '#261676',
				blue: '#2463FF',
				'light-gray': '#887DC0',
			},
			width: {
				infoCardW: '24rem',
			},
			maxWidth: {
				infoCardW: '24rem',
			},
			fontSize: {
				headingXL: '8.5rem',
				headingL: '5.5rem',
				headingM: '3rem',
				headingS: '2rem',
			},
		},
	},
	plugins: [],
};
