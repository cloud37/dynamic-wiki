<script lang="ts">
    import {getLabel} from '$lib/languages.js';
    import {formatPatchouliText} from "$lib/components/patchouli/patchouliFormatter";

    export let text: string;

    $: formattedText = formatPatchouliText(getLabel(text));
</script>


<p class="text-left max-w-fit textblock">{@html formattedText}</p>

