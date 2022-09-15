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
			case 'summon_bed':
				return 'Any Starby bed';
			case 'seeds':
				return 'wheat_seeds';
			case 'dyes':
				switch (tagParts[1]) {
					case 'blue':
						return 'blue_dye';
					case 'red':
						return 'red_dye';
					case 'yellow':
						return 'yellow_dye';
					case 'orange':
						return 'orange_dye';
					case 'purple':
						return 'purple_dye';
					case 'white':
						return 'white_dye';
					case 'black':
						return 'black_dye';
					case 'light_blue':
						return 'light_blue_dye';
					case 'lime':
						return 'lime_dye';
					case 'cyan':
						return 'cyan_dye';
					case 'gray':
						return 'gray_dye';
					case 'light_gray':
						return 'light_gray_dye';
					case 'brown':
						return 'brown_dye';
					case 'green':
						return 'green_dye';
					case 'magenta':
						return 'magenta_dye';
					case 'pink':
						return 'pink_dye';
					default:
						return 'unknown color';
				}
			case 'ender_pearls':
				return 'ender_pearl';
		}
	}
	return undefined;
};
