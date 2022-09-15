<script context="module" lang="ts">
    import {getTexture} from "$lib/textures";
    import {getIdFromResourceLocation} from "$lib/utils/idResolver";

    const mapSpecialNames = (name: string) => {
        if (name === 'ars_nouveau:magebloom_crop') {
            return 'magebloom_seed';
        }
        return name;
    }

    const getItemSrc = (item: string, textures: App.TextureDictionary) => {
        if (item && !item.split) {
            debugger;
        }
        let src = getTexture(mapSpecialNames(item), textures)
        const itemId = getIdFromResourceLocation(item);
        if (src === 'Unknown Texture') {
            if (['clock', 'compass'].includes(itemId)) {
                src = `/minecraft/textures/item/${itemId}_12.png`
            } else {
                src = `/minecraft/textures/item/${itemId}.png`
            }
        }
        return src;
    }
</script>

<script lang="ts">
    import {texturesStore} from "$lib/stores/fileStore";
    import {chosenLanguageStore, languagesStore, minecraftLanguageStore} from "$lib/stores/languageStore";
    import {notDisplayableItems} from "$lib/components/patchouli/RecipeDisplay/notDisplayableItems";
    import {getBlockOrItemLabel, getLabel} from "$lib/languages";

    export let item: string;

    const getDisplayText = (item: string, languages: App.LanguageDictionary, chosenLanguage: string, minecraftLanguage: App.MinecraftLanguageDictionary) => {
        if (notDisplayableItems.includes(item)) {
            const splitItem = item.split(":");
            if (splitItem[0] === 'ars_nouveau') {
                return getBlockOrItemLabel(splitItem[1], languages, chosenLanguage, minecraftLanguage);
            } else {
                return getLabel(`block.minecraft.${splitItem[1]}`, languages, chosenLanguage, minecraftLanguage);
            }
        } else {
            return getBlockOrItemLabel(item, languages, chosenLanguage, minecraftLanguage);
        }
    }

    $: src = item ? getItemSrc(item, $texturesStore) : 'missingitem';
    $: displayText = item ? getDisplayText(item, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore) : 'misingitem';
    $: showImage = !notDisplayableItems.includes(item);
</script>

<div class="self-center flex flex-col items-center">
    {#if showImage}<img alt={`picture of the ingredient ${item}`} height="75px" {src} width="75px"/>{/if}
    <span class="text-center">{displayText}</span>
</div>