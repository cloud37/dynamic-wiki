<script lang="ts">
    import {getLabel} from '$lib/languages.js';
    import {formatPatchouliText} from "$lib/components/patchouli/patchouliFormatter";
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore";

    export let text: string;

    $: formattedText = formatPatchouliText(getLabel(text, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore));
</script>

<div class="flex justify-center w-100"><p class="text-left" style="max-width: 50vw">{@html formattedText}</p></div>
