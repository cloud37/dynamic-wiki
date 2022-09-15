export const getBlockOrItemLabel = (
	label: string,
	languages: App.LanguageDictionary,
	chosenLanguage: string,
	minecraftLanguage: App.MinecraftLanguageDictionary
): string => {
	let foundLabel = getLabel(
		`item.ars_nouveau.${label}`,
		languages,
		chosenLanguage,
		minecraftLanguage
	);
	if (foundLabel.startsWith('item.ars_nouveau')) {
		foundLabel = getLabel(
			`block.ars_nouveau.${label}`,
			languages,
			chosenLanguage,
			minecraftLanguage
		);
	}
	return foundLabel;
};

export const getLabel = (
	label: string,
	languages: App.LanguageDictionary,
	chosenLanguage: string,
	minecraftLanguage: App.MinecraftLanguageDictionary
): string => {
	if (languages && minecraftLanguage) {
		const foundLabel =
			languages[chosenLanguage][label] || minecraftLanguage[label] || 'unknown label';
		if (foundLabel === 'unknown label') {
			return label;
		}
		return foundLabel;
	} else {
		console.log('Languages not yet loaded');
		return 'unknown label';
	}
};
