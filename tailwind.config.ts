import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["light"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},
				primary: {
					DEFAULT: '#ad9253',
					'50': '#f9f8f1',
					'100': '#edead8',
					'200': '#dfdab9',
					'300': '#c6bb83',
					'400': '#b9a866',
					'500': '#ad9253',
					'600': '#987847',
					'700': '#7f5e3e',
					'800': '#694d37',
					'900': '#58412f',
					'950': '#312217'
					// DEFAULT: '#7c95b5',
					// '50': '#f5f7f9',
					// '100': '#e7ecf2',
					// '200': '#d5dee8',
					// '300': '#bacad9',
					// '400': '#96adc4',
					// '500': '#7c95b5',
					// '600': '#6a80a6',
					// '700': '#5e7097',
					// '800': '#515d7c',
					// '900': '#444d64',
					// '950': '#2c323f'
				},
				secondary: {
					DEFAULT: '#d1863e',
					'50': '#fcf8f0',
					'100': '#f8eedc',
					'200': '#efdab9',
					'300': '#e5c08c',
					'400': '#d89d5a',
					'500': '#d1863e',
					'600': '#c27034',
					'700': '#a2592c',
					'800': '#82472a',
					'900': '#693c25',
					'950': '#381d12'
				},
				faabs: {
					DEFAULT: '#ad9253',
					'50': '#f9f8f1',
					'100': '#edead8',
					'200': '#dfdab9',
					'300': '#c6bb83',
					'400': '#b9a866',
					'500': '#ad9253',
					'600': '#987847',
					'700': '#7f5e3e',
					'800': '#694d37',
					'900': '#58412f',
					'950': '#312217'
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
};

export default config;
