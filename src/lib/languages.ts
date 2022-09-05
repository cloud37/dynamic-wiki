import { chosenLanguage, languagesStore } from '$lib/stores/languageStore';

let currentLanguage: string;
let languages: App.LanguageDictionary;

chosenLanguage.subscribe((chosenLanguage) => (currentLanguage = chosenLanguage));
languagesStore.subscribe((value) => (languages = value));

export const getLabel = (label: string): string => {
	const foundLabel = languages[currentLanguage][label] || label;
	if (foundLabel === 'unknown label') {
		console.log(`Unknown Label: ${label}`);
	}
	return foundLabel;
};
