import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const languagesStore: Writable<App.LanguageDictionary | undefined> = writable({});
export const chosenLanguageStore: Writable<string> = writable('en_us');
export const minecraftLanguageStore: Writable<App.MinecraftLanguageDictionary> = writable({});
