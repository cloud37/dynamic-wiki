<script lang="ts">
    import {patchouliStore} from "$lib/stores/fileStore";
    import {getLabel} from "$lib/languages.js";

    /** @type {import('./$types').PageData} */
    export let data: App.PageData;

    /** @type {import('@sveltejs/kit').ParamMatcher}
     export function match(param) {
        return !!Object.entries($patchouliStore).find(([key]) => key === param);
    }*/

    $: displayedCategory = $patchouliStore[data?.category]

</script>

<div class="flex justify-center items-center h-full">
    <h2>{getLabel(displayedCategory.name)}</h2>
    <p>{getLabel(displayedCategory.description)}</p>
</div>
