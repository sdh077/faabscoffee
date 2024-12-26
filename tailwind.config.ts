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
					xl: '1200px',
				}
			},
		}
	},

	plugins: [typography, forms]
} satisfies Config;
