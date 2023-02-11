/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: true,
	theme: {
		colors: {
			primary: "#ff7601",
			secondary: "#fecc01",
			black: "#242424",
			white: "white",
		},
		fontFamily: {
			"pt-serif": ["PT Serif", "serif"],
			montserrat: ["Montserrat", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				underline: "url('/assets/icons/underline.svg')"
			},
			keyframes: {
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-10px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				"fade-in-down": "fade-in-down 0.5s ease-out",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
