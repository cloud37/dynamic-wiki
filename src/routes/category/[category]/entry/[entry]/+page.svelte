<script lang="ts">
    import {patchouliStore} from '$lib/stores/fileStore';
    import {getLabel} from '$lib/languages.js';
    import PatchouliPage from '$lib/components/patchouli/PatchouliPage.svelte';
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore";

    /** @type {import('./$types').PageData} */
    export let data: App.PageData;

    $: containingCategory = $patchouliStore[data?.category];
    $: displayedEntry = containingCategory.entries[data?.entry];
    $: entryName = getLabel(displayedEntry?.name, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore);
</script>

<svelte:head><title>{entryName}</title></svelte:head>

<h2 class="text-center">{entryName}</h2>
<div class="flex flex-col justify-start items-center h-full m-4">
    <div class="flex flex-col">
        {#each displayedEntry?.pages as page}
            <PatchouliPage patchouliPage={page}/>
        {/each}
    </div>
</div>
