import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { Searcher } from 'fast-fuzzy';

export const searchStore: Writable<Searcher<App.SearchCandidate, any> | undefined> =
	writable(undefined);
