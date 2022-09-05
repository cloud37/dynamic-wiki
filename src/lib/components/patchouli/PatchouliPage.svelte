<script lang="ts">
    import TextPage from "$lib/components/patchouli/TextPage.svelte";
    import CraftingPage from "$lib/components/patchouli/CraftingPage.svelte";
    import ApparatusPage from "$lib/components/patchouli/ApparatusPage.svelte";
    import ImbuementPage from "$lib/components/patchouli/ImbuementPage.svelte";

    export let patchouliPage: App.PatchouliPage;

    const getDisplayedComponent = (type: string) => {
        switch (type) {
            case 'patchouli:text':
                return TextPage;
            case 'patchouli:crafting':
                return CraftingPage;
            case 'ars_nouveau:apparatus_recipe':
                return ApparatusPage;
            case 'ars_nouveau:imbuement_recipe':
                return ImbuementPage;
            default:
                return undefined;
        }
    }

    $: displayedComponent = getDisplayedComponent(patchouliPage?.type)
</script>

<svelte:component recipe={patchouliPage.recipe} text={patchouliPage.text} this={displayedComponent}/>