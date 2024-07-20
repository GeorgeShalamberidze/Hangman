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
			},
		},
	},
	plugins: [],
};
