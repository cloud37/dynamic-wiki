import { recipesStore } from '$lib/stores/fileStore';
import { getIdFromResourceLocation } from '$lib/utils/idResolver';

let recipes: App.TextureDictionary | undefined;

recipesStore.subscribe((value) => (recipes = value));

export const getRecipe = (resourceLocation: string): string => {
	if (recipes) {
		return recipes[getIdFromResourceLocation(resourceLocation)] || 'unknown recipe';
	}
	return `Unknown Recipe: ${resourceLocation}`;
};
