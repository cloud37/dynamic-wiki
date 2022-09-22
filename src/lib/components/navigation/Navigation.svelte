<script lang="ts">
    import {storeCurrentUrl} from '$lib/stores/uiState.js';
    import {patchouliStore} from '$lib/stores/fileStore';
    import {storeMobileDrawer} from '$lib/stores/uiState';
    import {Divider} from '@brainandbones/skeleton';
    import {afterNavigate} from '$app/navigation';
    import {scrollSelectionIntoView} from "$lib/components/navigation/scrollHelper";
    import Label from "$lib/components/Label.svelte";


    export let embedded: boolean = false;

    // ListItem Click Handler
    function onListItemClick(): void {
        if (!embedded) return;
        storeMobileDrawer.set(false);
    }

    $: sortedCategories = Object.values($patchouliStore).sort(
        (categoryA, categoryB) => categoryA.sortnum - categoryB.sortnum
    );
    afterNavigate(() => {
        scrollSelectionIntoView();
    })
</script>

<div class="mb-8 {$$props.class || ''}">
    {#each sortedCategories as category, i}
        <div class="text-primary-500 text-sm font-bold uppercase p-4">
            <a href={`/category/${category.id}`} style="text-decoration-line: none">
                <Label label={category.name}/>
            </a>
        </div>
        <nav class="list-nav">
            <ul>
                {#each Object.entries(category.entries) as [id, entry]}
                    {@const href=`/category/${entry.category}/entry/${id}`}
                    <li>
                        <a {href} on:click={onListItemClick} class:navSelected={$storeCurrentUrl === href}>
                            <span class="flex-auto">
                                <Label label={entry.name}/>
                            </span>
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
        {#if i + 1 < sortedCategories.length}
            <Divider class="my-4 opacity-40"/>
        {/if}
    {/each}
</div>
