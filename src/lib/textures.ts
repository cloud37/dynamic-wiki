import { getIdFromResourceLocation } from '$lib/utils/idResolver';

const mapSpecialTextures = (texture: string) => {
	if (texture === 'dowsing_rod') {
		return 'dowsing_rod_100';
	}
	if (texture.startsWith('potion_flask')) {
		return 'potion_flask';
	}
	return texture;
};

export const getTexture = (resourceLocation: string, textures: App.TextureDictionary): string => {
	if (textures) {
		const texture =
			textures[mapSpecialTextures(getIdFromResourceLocation(resourceLocation))] ||
			'Unknown Texture';
		if (texture === 'Unknown Texture') {
			return texture;
		}
		return `data:image/png;base64,${texture}`;
	}
	return `Unknown Texture: ${resourceLocation}`;
};
