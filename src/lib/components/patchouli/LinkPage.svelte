<script lang="ts">
    import {getLabel} from '$lib/languages.js';
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore.js";

    export let text: string;
    export let link_text: string;
    export let url: string;
</script>

<p>{getLabel(text, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)}</p>
<a href={url} rel="noopener noreferrer"
   target="_blank">{getLabel(link_text, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)}</a>
