<script lang="ts">
	import { getLabel } from '$lib/languages.js';
	import { storeCurrentUrl } from '$lib/stores/uiState.js';
	import { patchouliStore } from '$lib/stores/fileStore';
	import { storeMobileDrawer } from '$lib/stores/uiState';
	import { Divider, List, ListItem } from '@brainandbones/skeleton';

	export let embedded: boolean = false;

	// ListItem Click Handler
	function onListItemClick(): void {
		if (!embedded) return;
		storeMobileDrawer.set(false);
	}

	$: sortedCategories = Object.values($patchouliStore).sort(
		(categoryA, categoryB) => categoryA.sortnum - categoryB.sortnum
	);
</script>

<div class="mb-8 {$$props.class || ''}">
	{#each sortedCategories as category, i}
		<div class="text-primary-500 text-sm font-bold uppercase p-4">
			<a href={`/category/${category.id}`} style="text-decoration-line: none">
				{getLabel(category.name)}
			</a>
		</div>

		<List label={getLabel(category.name)} selected={storeCurrentUrl} tag="nav">
			{#each Object.entries(category.entries) as [id, entry]}
				<ListItem
					href={`/category/${entry.category}/entry/${id}`}
					value={`/category/${entry.category}/entry/${id}`}
					on:click={onListItemClick}
				>
					<span>{getLabel(entry.name)}</span>
				</ListItem>
			{/each}
		</List>
		{#if i + 1 < sortedCategories.length}
			<Divider class="my-4 opacity-40" />
		{/if}
	{/each}
</div>
