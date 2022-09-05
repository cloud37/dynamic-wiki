import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const languagesStore: Writable<App.LanguageDictionary> = writable({});
export const chosenLanguage: Writable<string> = writable('en_us');
