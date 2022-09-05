<script lang="ts">
    import {Divider, List, ListItem} from '@brainandbones/skeleton';
    import {patchouliStore} from "$lib/stores/fileStore";
    import {getLabel} from "$lib/languages.js";
    import {storeMobileDrawer, storeCurrentUrl} from "$lib/stores/uiState.js";

    // Props
    export let embedded: boolean = false;

    // ListItem Click Handler
    function onListItemClick(): void {
        if (!embedded) return;
        storeMobileDrawer.set(false);
    }

    $: sortedCategories = Object.values($patchouliStore).sort((categoryA, categoryB) => categoryA.sortnum - categoryB.sortnum)
</script>

<div class="mb-8 {$$props.class || ''}">
    {#each sortedCategories as category, i}
        <!-- Title -->
        <div class="text-primary-500 text-sm font-bold uppercase p-4">{getLabel(category.name)}</div>

        <List label={getLabel(category.name)} selected={storeCurrentUrl} tag="nav">
            {#each Object.entries(category.entries) as [id, entry]}
                <ListItem href={`/category/${entry.category}/entry/${id}`}
                          value={`/category/${entry.category}/entry/${id}`}>
                    <span>{getLabel(entry.name)}</span>
                </ListItem>
            {/each}
        </List>

        <!-- Divider -->
        {#if i + 1 < sortedCategories.length}
            <Divider class="my-4 opacity-30"/>
        {/if}
    {/each}
</div>
