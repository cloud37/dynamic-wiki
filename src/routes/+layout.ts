import type { LoadEvent } from '@sveltejs/kit';
import { initializeStores } from '$lib/setup/initializeStores';

export async function load({ fetch }: LoadEvent) {
	await initializeStores(fetch);
}
