import { chosenLanguage, languagesStore, minecraftLanguageStore } from '$lib/stores/languageStore';

let currentLanguage: string;
let languages: App.LanguageDictionary | undefined;
let minecraftLanguages: App.MinecraftLanguageDictionary | undefined;

chosenLanguage.subscribe((chosenLanguage) => (currentLanguage = chosenLanguage));
languagesStore.subscribe((value) => (languages = value));
minecraftLanguageStore.subscribe((value) => (minecraftLanguages = value));

export const getBlockOrItemLabel = (label: string): string => {
	let foundLabel = getLabel(`item.ars_nouveau.${label}`);
	if (foundLabel.startsWith('item.ars_nouveau')) {
		foundLabel = getLabel(`block.ars_nouveau.${label}`);
	}
	return foundLabel;
};

export const getLabel = (label: string): string => {
	if (languages && minecraftLanguages) {
		const foundLabel =
			languages[currentLanguage][label] || minecraftLanguages[label] || 'unknown label';
		if (foundLabel === 'unknown label') {
			return label;
		}
		return foundLabel;
	} else {
		console.log('Languages not yet loaded');
		return 'unknown label';
	}
};
