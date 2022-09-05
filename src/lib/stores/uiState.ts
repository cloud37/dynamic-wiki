// Persists the mobile-only nav drawer 'open' state
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

// Set within root layout, persists current SvelteKit $page.url.pathname
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

// Persists the mobile-only nav drawer 'open' state
export const storeMobileDrawer: Writable<boolean> = writable(false);
