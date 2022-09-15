<script lang="ts">
    import {resolveTag} from "$lib/components/patchouli/RecipeDisplay/tagResolver";
    import {getLabel} from "$lib/languages.js";
    import {getTexture} from "$lib/textures";
    import {texturesStore} from "$lib/stores/fileStore";
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore.js";

    export let tag: string

    $: resolvedTag = resolveTag(tag);
    $: displayAsText = resolvedTag?.includes("block");
    $: resolvedTexture = getTexture(resolvedTag, $texturesStore)
    $: src = !displayAsText && resolvedTexture !== 'Unknown Texture' ? resolvedTexture : `/minecraft/textures/item/${resolvedTag}.png`
</script>

{#if resolvedTag}
    {#if displayAsText}
        <span class="self-center">{getLabel(resolvedTag, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)}</span>
    {:else }
        <img {src} alt={`picture of the ingredient ${resolvedTag}`} height="75px" width="75px"/>
    {/if}
{/if}