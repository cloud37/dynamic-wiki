import { recipesStore } from '$lib/stores/fileStore';
import { getIdFromResourceLocation } from '$lib/utils/idHelper';

let recipes: App.TextureDictionary;

recipesStore.subscribe((value) => (recipes = value));

export const getRecipe = (resourceLocation: string): string => {
	const recipe = recipes[getIdFromResourceLocation(resourceLocation)] || 'unknown recipe';
	if (recipe === 'unknown recipe') {
		console.log(`Unknown Recipe: ${resourceLocation}`);
	}
	return recipe;
};
