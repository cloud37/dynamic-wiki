<script lang="ts">
    import TextPage from '$lib/components/patchouli/TextPage.svelte';
    import CraftingPage from '$lib/components/patchouli/CraftingPage.svelte';
    import LinkPage from '$lib/components/patchouli/LinkPage.svelte';
    import RelationsPage from "$lib/components/patchouli/RelationsPage.svelte";
    import ArsPage from "$lib/components/patchouli/ArsPage.svelte";

    export let patchouliPage: App.PatchouliPage;

    const getDisplayedComponent = (type: string) => {
        switch (type) {
            case 'patchouli:text':
                return TextPage;
            case 'patchouli:crafting':
                return CraftingPage;
            case 'patchouli:link':
                return LinkPage;
            case 'patchouli:relations':
                return RelationsPage;
            case 'ars_nouveau:apparatus_recipe':
            case 'ars_nouveau:imbuement_recipe':
            case 'ars_nouveau:enchanting_recipe':
            case "ars_nouveau:glyph_recipe":
            case "ars_nouveau:no_output_apparatus_recipe":
                return ArsPage;
            default:
                return undefined;
        }
    };

    $: displayedComponent = getDisplayedComponent(patchouliPage?.type);
</script>

<div class="mb-2">
    <svelte:component {...patchouliPage} this={displayedComponent}/>
</div>
