<script lang="ts">
    import {getLabel} from '$lib/languages.js';
    import {storeCurrentUrl} from '$lib/stores/uiState.js';
    import {patchouliStore} from '$lib/stores/fileStore';
    import {storeMobileDrawer} from '$lib/stores/uiState';
    import {Divider, List, ListItem} from '@brainandbones/skeleton';
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore.js";
    import {afterNavigate} from '$app/navigation';
    import {browser} from '$app/environment';


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
        if (browser) {
            setTimeout(() => {
                const elements = document.getElementsByClassName("!bg-primary-500");
                if (elements && elements.length > 0) {
                    elements[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
                }
            }, 1)
        }
    })
</script>

<div class="mb-8 {$$props.class || ''}">
    {#each sortedCategories as category, i}
        <div class="text-primary-500 text-sm font-bold uppercase p-4">
            <a href={`/category/${category.id}`} style="text-decoration-line: none">
                {getLabel(category.name, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)}
            </a>
        </div>

        <List label={getLabel(category.name, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)}
              selected={storeCurrentUrl} tag="nav"
              highlight="!bg-primary-500 !text-white">
            {#each Object.entries(category.entries) as [id, entry]}
                <ListItem
                        href={`/category/${entry.category}/entry/${id}`}
                        value={`/category/${entry.category}/entry/${id}`}
                        on:click={onListItemClick}
                >
                    <span>{getLabel(entry.name, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)}</span>
                </ListItem>
            {/each}
        </List>
        {#if i + 1 < sortedCategories.length}
            <Divider class="my-4 opacity-40"/>
        {/if}
    {/each}
</div>
