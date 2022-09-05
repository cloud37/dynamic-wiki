<script lang="ts">
    import {List} from "@brainandbones/skeleton";
    import Entry from "$lib/components/navigation/Entry.svelte";
    import {getLabel} from "$lib/languages.js";
    import {storeCurrentUrl} from "$lib/stores/uiState.js";

    export let category: App.PatchouliCategory;
    $: categoryName = getLabel(category.name)
</script>

<div class="text-primary-500 text-sm font-bold uppercase p-4">{categoryName}</div>

<List {categoryName} label={categoryName} selected={storeCurrentUrl} tag="nav">
    {#each Object.entries(category.entries) as [id, entry]}
        <Entry id={id} entry={entry}/>
    {/each}
</List>