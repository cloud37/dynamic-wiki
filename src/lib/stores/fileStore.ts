import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const texturesStore: Writable<App.TextureDictionary> = writable({});
export const patchouliStore: Writable<App.PatchouliStore> = writable({});
export const recipesStore: Writable<App.RecipeDictionary> = writable({});
