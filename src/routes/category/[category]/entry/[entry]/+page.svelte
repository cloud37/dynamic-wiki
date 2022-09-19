<script lang="ts">
    import {patchouliStore} from '$lib/stores/fileStore';
    import PatchouliPage from '$lib/components/patchouli/PatchouliPage.svelte';
    import Label from "$lib/components/Label.svelte";
    import {getLabelWithCurrentValues} from "$lib/languages";

    /** @type {import('./$types').PageData} */
    export let data: App.PageData;

    $: containingCategory = $patchouliStore[data?.category];
    $: displayedEntry = containingCategory.entries[data?.entry];
    $: entryName = getLabelWithCurrentValues(displayedEntry?.name);
</script>

<svelte:head><title>{entryName}</title></svelte:head>

<h2 class="text-center"><Label label={displayedEntry?.name}/></h2>
<div class="flex justify-center">
    <div class="flex flex-col justify-start items-start max-w-prose h-full m-4">
        <div class="flex flex-col">
            {#each displayedEntry?.pages as page}
                <PatchouliPage patchouliPage={page}/>
            {/each}
        </div>
    </div>
</div>

