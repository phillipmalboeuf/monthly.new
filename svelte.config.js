import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [vanillaExtractPlugin()]
		}
	}
};

export default config;
