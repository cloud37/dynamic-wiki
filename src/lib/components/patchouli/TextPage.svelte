<script lang="ts">
    import {getLabel} from "$lib/languages.js";

    export let text: string;
</script>

<p>{getLabel(text)}</p>