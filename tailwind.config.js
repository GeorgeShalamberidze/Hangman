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
		screens: {
			xs: '370px',
			ms: '600px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
};
