export const resolveTag = (tag: string): string | undefined => {
	const tagParts = tag.split(':').pop()?.split('/');
	if (tagParts && tagParts.length > 0) {
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
					case 'quartz':
						return 'quartz';
					case 'lapis':
						return 'lapis_lazuli';
					case 'emerald':
						return 'emerald';
					default:
						return undefined;
				}
			case 'storage_blocks':
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
					case 'lapis':
						return 'block.minecraft.lapis_block';
					case 'emerald':
						return 'block.minecraft.emerald_block';
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
			case 'nuggets':
				switch (tagParts[1]) {
					case 'gold':
						return 'gold_nugget';
					case 'iron':
						return 'iron_nugget';
					default:
						return undefined;
				}
			case 'fishes':
				return 'Any fish';
			case 'stone':
				return 'Any smooth stone';
			case 'glass':
				return 'Any glass';
			case 'buttons':
				return 'Any button';
			case 'chests':
				return 'Any chest';
			case 'seeds':
				return 'wheat_seeds';
			case 'ender_pearls':
				return 'ender_pearl';
		}
	}
	return undefined;
};
