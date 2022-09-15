import { getIdFromResourceLocation } from '$lib/utils/idResolver';

export const preparePatchouli = (
	categories: { [x: string]: App.PatchouliCategory } | undefined,
	entries: { [x: string]: App.PatchouliEntry } | undefined
) => {
	if (categories && entries) {
		Object.entries(categories).forEach(([key, category]) => {
			category.entries = {};
			category.id = key;
		});
		Object.entries(entries).forEach(([key, value]) => {
			const category = getIdFromResourceLocation(value.category) || '';
			value.category = category;
			// If we can't find the category, it's ok if the entry vanishes
			categories[category].entries = { ...categories[category].entries, [key]: value };
		});
	}
	return categories;
};
