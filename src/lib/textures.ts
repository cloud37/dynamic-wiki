import { texturesStore } from '$lib/stores/fileStore';
import { getIdFromResourceLocation } from '$lib/utils/idHelper';

let textures: App.TextureDictionary;

texturesStore.subscribe((value) => (textures = value));

export const getTexture = (resourceLocation: string): string => {
	const texture = textures[getIdFromResourceLocation(resourceLocation)] || 'unknown icon';
	if (texture === 'unknown icon') {
		console.log(`Unknown Texture: ${resourceLocation}`);
	}
	return texture;
};
