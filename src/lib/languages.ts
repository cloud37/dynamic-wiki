import { get } from 'svelte/store';
import {
	chosenLanguageStore,
	languagesStore,
	minecraftLanguageStore
} from '$lib/stores/languageStore';

const getArsNouveauLabel = (label: string): string | undefined => {
	if (label == 'source_berry') {
		return getLabel('block.ars_nouveau.sourceberry_bush');
	}
	let foundLabel = getLabel(`item.ars_nouveau.${label}`);
	if (foundLabel.startsWith('item.ars_nouveau')) {
		foundLabel = getLabel(`block.ars_nouveau.${label}`);
	}
	// Hail Mary because Glyphs are done in an annoying way
	if (foundLabel.startsWith('block.ars_nouveau')) {
		foundLabel = getLabel(`ars_nouveau.glyph_name.glyph_${label}`);
	}
	return foundLabel.startsWith('ars_nouveau.glyph_name.glyph_') ? undefined : foundLabel;
};

const getMinecraftLabel = (label: string): string | undefined => {
	let foundLabel = getLabel(`item.minecraft.${label}`);
	if (foundLabel.startsWith('item.minecraft')) {
		foundLabel = getLabel(`block.minecraft.${label}`);
	}
	return foundLabel.startsWith('block.minecraft') ? undefined : foundLabel;
};

export const getBlockOrItemLabel = (label: string): string => {
	const splitLabel = label.split(':');
	if (splitLabel.length > 1) {
		if (splitLabel[0] === 'ars_nouveau') {
			return getArsNouveauLabel(splitLabel[1]) || label;
		} else {
			return getMinecraftLabel(splitLabel[1]) || label;
		}
	}
	let foundLabel = getArsNouveauLabel(label);
	if (!foundLabel) {
		foundLabel = getMinecraftLabel(label);
	}
	return foundLabel || label;
};

export const getLabel = (label: string): string => {
	const languages = get(languagesStore);
	const chosenLanguage = get(chosenLanguageStore);
	const minecraftLanguage = get(minecraftLanguageStore);

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
