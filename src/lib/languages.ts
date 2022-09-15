const getArsNouveauLabel = (
	label: string,
	languages: App.LanguageDictionary,
	chosenLanguage: string,
	minecraftLanguage: App.MinecraftLanguageDictionary
): string | undefined => {
	if (label == 'source_berry') {
		return getLabel(
			'block.ars_nouveau.sourceberry_bush',
			languages,
			chosenLanguage,
			minecraftLanguage
		);
	}
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
	// Hail Mary because Glyphs are done in an annoying way
	if (foundLabel.startsWith('block.ars_nouveau')) {
		foundLabel = getLabel(
			`ars_nouveau.glyph_name.glyph_${label}`,
			languages,
			chosenLanguage,
			minecraftLanguage
		);
	}
	return foundLabel.startsWith('ars_nouveau.glyph_name.glyph_') ? undefined : foundLabel;
};

const getMinecraftLabel = (
	label: string,
	languages: App.LanguageDictionary,
	chosenLanguage: string,
	minecraftLanguage: App.MinecraftLanguageDictionary
): string | undefined => {
	let foundLabel = getLabel(
		`item.minecraft.${label}`,
		languages,
		chosenLanguage,
		minecraftLanguage
	);
	if (foundLabel.startsWith('item.minecraft')) {
		foundLabel = getLabel(`block.minecraft.${label}`, languages, chosenLanguage, minecraftLanguage);
	}
	return foundLabel.startsWith('block.minecraft') ? undefined : foundLabel;
};

export const getBlockOrItemLabel = (
	label: string,
	languages: App.LanguageDictionary,
	chosenLanguage: string,
	minecraftLanguage: App.MinecraftLanguageDictionary
): string => {
	const splitLabel = label.split(':');
	if (splitLabel.length > 1) {
		if (splitLabel[0] === 'ars_nouveau') {
			return (
				getArsNouveauLabel(splitLabel[1], languages, chosenLanguage, minecraftLanguage) || label
			);
		} else {
			return (
				getMinecraftLabel(splitLabel[1], languages, chosenLanguage, minecraftLanguage) || label
			);
		}
	}
	let foundLabel = getArsNouveauLabel(label, languages, chosenLanguage, minecraftLanguage);
	if (!foundLabel) {
		foundLabel = getMinecraftLabel(label, languages, chosenLanguage, minecraftLanguage);
	}
	return foundLabel || label;
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
