import { texturesStore } from '$lib/stores/fileStore';
import { getIdFromResourceLocation } from '$lib/utils/idResolver';

let textures: App.TextureDictionary | undefined;

texturesStore.subscribe((value) => (textures = value));

const getTextureId = (resourceLocation: string): string => {
	return getIdFromResourceLocation(resourceLocation);
};

export const getTexture = (resourceLocation: string): string => {
	if (textures) {
		const texture = textures[getTextureId(resourceLocation)] || 'Unknown Texture';
		if (texture === 'Unknown Texture') {
			return texture;
		}
		return `data:image/png;base64,${texture}`;
	}
	return `Unknown Texture: ${resourceLocation}`;
};
