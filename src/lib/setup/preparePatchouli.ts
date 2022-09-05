export const preparePatchouli = (
	categories: { [x: string]: App.PatchouliCategory },
	entries: { [x: string]: App.PatchouliEntry }
) => {
	Object.values(categories).forEach((category) => (category.entries = {}));
	Object.entries(entries).forEach(([key, value]) => {
		const category = value.category.split(':').pop() || '';
		value.category = category;
		// If we can't find the category, it's ok if the entry vanishes
		categories[category].entries = { ...categories[category].entries, [key]: value };
	});
	return categories;
};
