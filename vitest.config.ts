import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	// @ts-ignore
	test: {
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		exclude: ['tests-e2e/**/*'],
		globals: true,
		environment: 'jsdom'
	}
});
