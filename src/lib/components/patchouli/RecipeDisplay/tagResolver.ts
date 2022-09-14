export const resolveTag = (tag: string): string | undefined => {
	const tagParts = tag.split(':').pop()?.split('/');
	if (tagParts && tagParts.length === 2) {
		switch (tagParts[0]) {
			case 'ingots':
				switch (tagParts[1]) {
					case 'gold':
						return 'gold_ingot';
					case 'iron':
						return 'iron_ingot';
					case 'copper':
						return 'copper_ingot';
					case 'netherite':
						return 'netherite_ingot';
					default:
						return undefined;
				}
			case 'gems':
				switch (tagParts[1]) {
					case 'source':
						return 'source_gem';
					case 'diamond':
						return 'diamond';
					default:
						return undefined;
				}
			case 'storage_block':
				switch (tagParts[1]) {
					case 'source':
						return 'block.ars_nouveau.source_gem_block';
					case 'diamond':
						return 'block.minecraft.diamond_block';
					case 'gold':
						return 'block.minecraft.gold_block';
					case 'iron':
						return 'block.minecraft.iron_block';
					case 'copper':
						return 'block.minecraft.copper_block';
					case 'netherite':
						return 'block.minecraft.netherite_block';
					default:
						return undefined;
				}
			case 'rods':
				switch (tagParts[1]) {
					case 'blaze':
						return 'blaze_rod';
					default:
						return undefined;
				}
		}
	}
	return undefined;
};