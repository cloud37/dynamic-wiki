<script lang="ts">
    import {patchouliStore} from '$lib/stores/fileStore';
    import Label from "$lib/components/Label.svelte";
    import {getLabelWithCurrentValues} from "$lib/languages";

    /** @type {import('./$types').PageData} */
    export let data: App.PageData;

    $: displayedCategory = $patchouliStore[data?.category];
    $: categoryName = getLabelWithCurrentValues(displayedCategory.name);
</script>

<svelte:head><title>{categoryName}</title></svelte:head>

<h2 class="text-center"><Label label={displayedCategory.name}/></h2>
<div class="flex flex-col justify-start items-center h-full m-4">
    <p><Label label={displayedCategory.description}/></p>
</div>
