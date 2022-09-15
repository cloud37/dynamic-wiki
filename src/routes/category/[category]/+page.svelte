<script lang="ts">
    import {patchouliStore} from '$lib/stores/fileStore';
    import {getLabel} from '$lib/languages.js';
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore";

    /** @type {import('./$types').PageData} */
    export let data: App.PageData;

    $: displayedCategory = $patchouliStore[data?.category];
    $: categoryName = getLabel(displayedCategory.name, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore);
</script>

<svelte:head><title>{categoryName}</title></svelte:head>

<h2 class="text-center">{categoryName}</h2>
<div class="flex flex-col justify-start items-center h-full m-4">
    <p>{getLabel(displayedCategory.description, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)}</p>
</div>
