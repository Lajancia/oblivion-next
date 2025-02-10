import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			keyframes: {
				expandHeight: {
					'0%': { height: '0' },
					'100%': { height: '100%' },
				},
				expandHeightNoise: {
					'0%': { height: '0' },
					'100%': { height: 'calc(100% + 50px)' },
				},
				expandWidth: {
					'0%': { width: '0' },
					'100%': { width: '50%' },
				},
				opacityIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				opacityOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				shrink: {
					'0%': { height: '100%' },
					'100%': { height: '0' },
				},
				displayOnOff: {
					'0%': { display: 'none' },
					'10%': { display: 'blo' },
					'100%': { height: 'none' },
				},
			},
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',
});
