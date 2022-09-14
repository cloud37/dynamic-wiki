import {recipesStore} from '$lib/stores/fileStore';
import {getIdFromResourceLocation} from '$lib/utils/idResolver';

let recipes: App.TextureDictionary | undefined;

recipesStore.subscribe((value) => (recipes = value));

export const getRecipe = (resourceLocation: string): string => {
	if (recipes) {
		const recipe = recipes[getIdFromResourceLocation(resourceLocation)] || 'unknown recipe';
		if (recipe === 'unknown recipe') {
			console.log(`Unknown Recipe: ${resourceLocation}`);
		}
		return recipe;
	}
	return `Unknown Recipe: ${resourceLocation}`;
};
