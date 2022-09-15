import { getIdFromResourceLocation } from '$lib/utils/idResolver';

export const getTexture = (resourceLocation: string, textures: App.TextureDictionary): string => {
	if (textures) {
		const texture = textures[getIdFromResourceLocation(resourceLocation)] || 'Unknown Texture';
		if (texture === 'Unknown Texture') {
			return texture;
		}
		return `data:image/png;base64,${texture}`;
	}
	return `Unknown Texture: ${resourceLocation}`;
};
