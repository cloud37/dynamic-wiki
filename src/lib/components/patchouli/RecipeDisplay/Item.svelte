<script context="module" lang="ts">
    import {getTexture} from "$lib/textures";
    import {getBlockOrItemLabel, getLabel} from "$lib/languages";
    import {notDisplayableItems} from "$lib/components/patchouli/RecipeDisplay/notDisplayableItems";

    const getItemSrc = (item: string) => {
        let src = getTexture(item)
        if (src === 'Unknown Texture') {
            src = `/minecraft/textures/item/${item.split(":").pop()}.png`
        }
        return src;
    }

    const getDisplayText = (item: string) => {
        if (notDisplayableItems.includes(item)) {
            const splitItem = item.split(":");
            if (splitItem[0] === 'ars_nouveau') {
                return getBlockOrItemLabel(splitItem[1]);
            } else {
                return getLabel(`block.minecraft.${splitItem[1]}`);
            }
        } else {
            return undefined;
        }
    }
</script>

<script lang="ts">
    export let item: string;

    $: src = getItemSrc(item)
    $: displayText = getDisplayText(item)
</script>

{#if displayText}
    <span class="self-center">{displayText}</span>
{:else }
    <img alt={`picture of the ingredient ${item}`} height="75px" {src} width="75px"/>
{/if}
