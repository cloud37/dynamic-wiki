<script lang="ts">
    import {getLabel} from '$lib/languages.js';
    import {formatPatchouliText} from "$lib/components/patchouli/patchouliFormatter";
    import {patchouliStore} from "$lib/stores/fileStore";
    import {List, ListItem} from "@brainandbones/skeleton";
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore";

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
        return getLabel($patchouliStore[pathParts[0]].entries[pathParts[1]]?.name, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)
    }

</script>

<h3>{title ? getLabel(title, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore) || 'Related Pages:' : 'Related Pages:'}</h3>
<List>
    {#each entries as entry}
        {#if getName(entry)}
            <ListItem><a href={getHref(entry)}>{getName(entry)}</a></ListItem>
        {/if}
    {/each}
</List>

{#if text}
    <p>{formatPatchouliText(getLabel(text, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore))}</p>
{/if}