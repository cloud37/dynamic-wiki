<script lang="ts">
    import {getLabel} from "$lib/languages.js";
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore";

    export let label: string;
</script>

{getLabel(label, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)}