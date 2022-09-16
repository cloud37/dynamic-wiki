import type { LoadEvent } from '@sveltejs/kit';
import { initializeStores } from '$lib/setup/initializeStores';
import { storesLoaded } from '$lib/stores/fileStore';
import { get } from 'svelte/store';

export async function load({ fetch }: LoadEvent) {
	if (!get(storesLoaded)) {
		await initializeStores(fetch);
	}
}
