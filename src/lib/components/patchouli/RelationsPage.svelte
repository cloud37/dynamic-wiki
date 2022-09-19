<script lang="ts">
    import {getLabelWithCurrentValues} from '$lib/languages.js';
    import {formatPatchouliText} from "$lib/components/patchouli/patchouliFormatter";
    import {patchouliStore} from "$lib/stores/fileStore";
    import {List, ListItem} from "@brainandbones/skeleton";
    import Label from "$lib/components/Label.svelte";

    export let title: string;
    export let entries: Array<string>;
    export let text: string;

    //Example Entry: ars_nouveau:machines/enchanting_apparatus
    const getHref = (entry: string) => {
        const pathParts = entry.split(":").pop().split("/")
        return `/category/${pathParts[0]}/entry/${pathParts[1]}`;
    }
    const getName = (entry: string) => {
        const pathParts = entry.split(":").pop().split("/")
        if (getLabelWithCurrentValues($patchouliStore[pathParts[0]].entries[pathParts[1]]?.name)) {
            return $patchouliStore[pathParts[0]].entries[pathParts[1]]?.name;
        } else {
            return undefined;
        }
    }

</script>

<h3>
    {#if title}
        <Label label={title}/>
    {:else }
        Related Pages:
    {/if}
</h3>
<List>
    {#each entries as entry}
        {#if getName(entry)}
            <ListItem><a href={getHref(entry)}><Label label={getName(entry)}/></a></ListItem>
        {/if}
    {/each}
</List>

{#if text}
    <p>{formatPatchouliText(getLabelWithCurrentValues(text))}</p>
{/if}