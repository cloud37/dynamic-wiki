<script lang="ts">
    import {patchouliStore} from "$lib/stores/fileStore";
    import {getLabel} from "$lib/languages.js";

    /** @type {import('./$types').PageData} */
    export let data: App.PageData;

    /** @type {import('@sveltejs/kit').ParamMatcher}*/
    export function match(param) {
        return !!Object.entries($patchouliStore).find(([key]) => key === param);
    }

    $: displayedCategory = $patchouliStore[data?.category]
    $: categoryName = getLabel(displayedCategory.name)

</script>

<svelte:head><title>{categoryName}</title></svelte:head>


<h2 class="text-center text-xl">{categoryName}</h2>
<div class="flex flex-col justify-start items-center h-full m-4">
    <p>{getLabel(displayedCategory.description)}</p>
</div>
