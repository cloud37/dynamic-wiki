<script context="module" lang="ts">
    import {getTexture} from "$lib/textures";
    import {getBlockOrItemLabel, getLabel} from "$lib/languages";
    import {notDisplayableItems} from "$lib/components/patchouli/RecipeDisplay/notDisplayableItems";

    const getItemSrc = (item: string, textures: App.TextureDictionary) => {
        let src = getTexture(item, textures)
        if (src === 'Unknown Texture') {
            src = `/minecraft/textures/item/${item.split(":").pop()}.png`
        }
        return src;
    }

    const getDisplayText = (item: string, languages: App.LanguageDictionary, chosenLanguage: string, minecraftLanguage: App.MinecraftLanguageDictionary) => {
        if (notDisplayableItems.includes(item)) {
            const splitItem = item.split(":");
            if (splitItem[0] === 'ars_nouveau') {
                return getBlockOrItemLabel(splitItem[1], languages, chosenLanguage, minecraftLanguage);
            } else {
                return getLabel(`block.minecraft.${splitItem[1]}`, languages, chosenLanguage, minecraftLanguage);
            }
        } else {
            return undefined;
        }
    }
</script>

<script lang="ts">
    import {texturesStore} from "$lib/stores/fileStore";
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore";

    export let item: string;

    $: src = getItemSrc(item, $texturesStore)
    $: displayText = getDisplayText(item, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)
</script>

{#if displayText}
    <span class="self-center">{displayText}</span>
{:else }
    <img alt={`picture of the ingredient ${item}`} height="75px" {src} width="75px"/>
{/if}
