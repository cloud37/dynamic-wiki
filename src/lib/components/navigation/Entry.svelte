<script lang="ts">
    import {getLabel} from "$lib/languages.js";
    import {ListItem} from "@brainandbones/skeleton";

    export let id: String;
    export let entry: App.PatchouliEntry;
    $: entryName = getLabel(entry.name)
    $: href = `/category/${entry.category}/entry/${id}`
</script>

<ListItem href={href} value={href}>
    <span>{entryName}</span>
</ListItem>