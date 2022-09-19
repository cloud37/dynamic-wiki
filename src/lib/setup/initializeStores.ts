import JSZip from 'jszip';
import { preparePatchouli } from '$lib/setup/preparePatchouli';
import { patchouliStore, recipesStore, storesLoaded, texturesStore } from '$lib/stores/fileStore';
import { languagesStore, minecraftLanguageStore } from '$lib/stores/languageStore';
import {
	getMatchingJSONFiles,
	getTextureFiles,
	isLanguage,
	isPatchouliCategory,
	isPatchouliEntry,
	isRecipe
} from '$lib/setup/loadFiles';
import { browser } from '$app/environment';
import { apiBaseURL } from '$lib/utils/apiUtils';
import { initializeSearch } from '$lib/setup/initializeSearch';

const initalizeMinecraftLanguageStore = (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	return fetch('/minecraft/lang/en_us.json')
		.then((response) => response.json())
		.then((languageFile) => minecraftLanguageStore.set(languageFile));
};

const initalizeDynamicallyLoadedStores = (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	const url = browser ? apiBaseURL() : '/api/zipball';
	return fetch(url)
		.then(function (response) {
			if (response.status === 200 || response.status === 0) {
				return Promise.resolve(response.blob());
			} else {
				console.log(response.statusText);
				return Promise.reject(new Error(response.statusText));
			}
		})
		.then((blob) => blob.arrayBuffer())
		.then((blob) => {
			return JSZip.loadAsync(blob);
		})
		.then(async function (zip) {
			return Promise.all([
				getTextureFiles(zip),
				getMatchingJSONFiles(isPatchouliCategory, zip),
				getMatchingJSONFiles(isPatchouliEntry, zip),
				getMatchingJSONFiles(isLanguage, zip),
				getMatchingJSONFiles(isRecipe, zip)
			]).then(
				([
					loadedTextures,
					loadedPatchouliCategories,
					loadedPatchouliEntries,
					loadedLanguages,
					loadedRecipes
				]) => {
					texturesStore.set(loadedTextures);
					patchouliStore.set(preparePatchouli(loadedPatchouliCategories, loadedPatchouliEntries));
					languagesStore.set(loadedLanguages);
					recipesStore.set(loadedRecipes);
					storesLoaded.set(true);
					setTimeout(() => {
						storesLoaded.set(false);
					}, 86400000 /* stores should be refreshed after 1 day if the server is on for so long */);
					if (browser) {
						initializeSearch(loadedPatchouliCategories, loadedPatchouliEntries);
					}
				}
			);
		});
};

export const initializeStores = (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	return Promise.all([
		initalizeMinecraftLanguageStore(fetch),
		initalizeDynamicallyLoadedStores(fetch)
	]);
};
