<script lang="ts">
	import TextPage from '$lib/components/patchouli/TextPage.svelte';
	import CraftingPage from '$lib/components/patchouli/CraftingPage.svelte';
	import ApparatusPage from '$lib/components/patchouli/ApparatusPage.svelte';
	import ImbuementPage from '$lib/components/patchouli/ImbuementPage.svelte';
	import LinkPage from '$lib/components/patchouli/LinkPage.svelte';
	import EnchantingPage from '$lib/components/patchouli/EnchantingPage.svelte';

	export let patchouliPage: App.PatchouliPage;

	const getDisplayedComponent = (type: string) => {
		switch (type) {
			case 'patchouli:text':
				return TextPage;
			case 'patchouli:crafting':
				return CraftingPage;
			case 'patchouli:link':
				return LinkPage;
			case 'ars_nouveau:apparatus_recipe':
				return ApparatusPage;
			case 'ars_nouveau:imbuement_recipe':
				return ImbuementPage;
			case 'ars_nouveau:enchanting_recipe':
				return EnchantingPage;
			default:
				return undefined;
		}
	};

	$: displayedComponent = getDisplayedComponent(patchouliPage?.type);
</script>

<div class="mb-2">
	<svelte:component this={displayedComponent} {...patchouliPage} />
</div>
