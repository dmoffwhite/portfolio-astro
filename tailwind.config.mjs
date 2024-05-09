/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
				"animation": {
				  "pulse-slow": "pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)"
				}
		},
	},
	plugins: [],
	
}

