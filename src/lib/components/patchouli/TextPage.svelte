<script lang="ts">
    import {getLabelWithCurrentValues} from '$lib/languages.js';
    import {formatPatchouliText} from "$lib/components/patchouli/patchouliFormatter";
    import FormattedLabel from "$lib/components/patchouli/FormattedLabel.svelte";

    export let text: string;

    $: formattedText = formatPatchouliText(getLabelWithCurrentValues(text));
</script>


<p class="text-left max-w-fit textblock">
    <FormattedLabel label={text}/>
</p>

