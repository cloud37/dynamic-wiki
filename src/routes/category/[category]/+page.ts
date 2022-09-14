import type { LoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }: LoadEvent) {
	return {
		category: params.category
	};
}
