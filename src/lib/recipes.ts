import { getIdFromResourceLocation } from '$lib/utils/idResolver';

export const getRecipe = (resourceLocation: string, recipes: App.TextureDictionary): string => {
	if (recipes) {
		return recipes[getIdFromResourceLocation(resourceLocation)] || 'unknown recipe';
	}
	return `Unknown Recipe: ${resourceLocation}`;
};
