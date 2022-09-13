import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const languagesStore: Writable<App.LanguageDictionary | undefined> = writable({});
export const chosenLanguage: Writable<string> = writable('en_us');
