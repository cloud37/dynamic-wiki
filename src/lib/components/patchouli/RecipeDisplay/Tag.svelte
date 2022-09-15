<script lang="ts">
    import {resolveTag} from "$lib/components/patchouli/RecipeDisplay/tagResolver";
    import {getLabel} from "$lib/languages.js";
    import {getTexture} from "$lib/textures";
    import {texturesStore} from "$lib/stores/fileStore";
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore.js";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";

    export let tag: string

    $: resolvedTag = resolveTag(tag);
    $: displayAsText = resolvedTag?.includes("block") || resolvedTag?.includes("Any");
    $: resolvedTexture = getTexture(resolvedTag, $texturesStore)
    $: src = !displayAsText && resolvedTexture !== 'Unknown Texture' ? resolvedTexture : `/minecraft/textures/item/${resolvedTag}.png`
</script>

{#if resolvedTag}
    {#if displayAsText}
        <span class="self-center">{getLabel(resolvedTag, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)}</span>
    {:else }
        <Item item={resolvedTag}/>
    {/if}
{/if}