<script lang="ts">
    import {resolveTag} from "$lib/components/patchouli/RecipeDisplay/tagResolver";
    import {getLabel} from "$lib/languages.js";
    import {getTexture} from "$lib/textures";

    export let tag: string

    $: resolvedTag = resolveTag(tag);
    $: displayAsText = resolvedTag?.includes("block");
    $: resolvedTexture = getTexture(resolvedTag)
    $: src = !displayAsText && resolvedTexture !== 'Unknown Texture' ? resolvedTexture : `minecraft/${resolvedTag}.png`
</script>

{#if resolvedTag}
    {#if displayAsText}
        <span class="self-center">{getLabel(resolvedTag)}</span>
    {:else }
        <img {src} alt={`picture of the ingredient ${resolvedTag}`}/>
    {/if}
{/if}