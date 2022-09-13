<script lang="ts">
    import {getLabel} from "$lib/languages.js";

    export let text: string;
    export let link_text: string;
    export let url: string;


</script>

<p>{getLabel(text)}</p>
<a href={url} rel="noopener noreferrer" target="_blank">{getLabel(link_text)}</a>