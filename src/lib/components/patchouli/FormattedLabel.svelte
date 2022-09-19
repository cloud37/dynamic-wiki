<script lang="ts">
    import {getLabel} from "$lib/languages.js";
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore";
    import {formatPatchouliText} from "$lib/components/patchouli/patchouliFormatter.js";

    export let label: string;
</script>

{@html formatPatchouliText(getLabel(label, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore))}