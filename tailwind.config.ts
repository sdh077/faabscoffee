import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '12px',
					lg: '4rem'
				},
				screens: {
					sm: '640px',
					md: '768px',
					lg: '960px',
					xl: '1200px'
				}
			},
			colors: {
				primary: {
					'50': '#f5f7f9',
					'100': '#e7ecf2',
					'200': '#d5dee8',
					'300': '#bacad9',
					'400': '#96adc4',
					'500': '#7c95b5',
					'600': '#6a80a6',
					'700': '#5e7097',
					'800': '#515d7c',
					'900': '#444d64',
					'950': '#2c323f'
				},
				secondary: {
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
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
