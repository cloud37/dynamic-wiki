<script lang="ts">
    import Category from "$lib/components/navigation/Category.svelte";
    import {patchouliStore} from "$lib/stores/fileStore";
    import {storeMobileDrawer} from "$lib/stores/uiState";
    import {Divider} from "@brainandbones/skeleton";
    import {onMount} from "svelte";

    export let embedded: boolean = false;

    // ListItem Click Handler
    function onListItemClick(): void {
        if (!embedded) return;
        storeMobileDrawer.set(false);
    }

    let navigationDiv;

    $: sortedCategories = Object.values($patchouliStore).sort((categoryA, categoryB) => categoryA.sortnum - categoryB.sortnum)

    onMount(() => {
        if (navigationDiv) {
            navigationDiv.parentElement.style.height = "93vh"
        }
    })

</script>

<div bind:this={navigationDiv} class="mb-8 {$$props.class || ''}">
    {#each sortedCategories as category, i}
        <Category category={category}/>
        {#if i + 1 < sortedCategories.length}
            <Divider class="my-4 opacity-40"/>
        {/if}
    {/each}
</div>