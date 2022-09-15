<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import {getLabel} from "$lib/languages.js";
    import {languagesStore, chosenLanguageStore, minecraftLanguageStore} from "$lib/stores/languageStore.js";
    import {getIdFromResourceLocation} from "$lib/utils/idResolver.js";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.EnchantmentRecipe;

    const getEnchantmentLabel = (label: string) => {
        if (label === 'ars_nouveau:reactive') {
            return getLabel(`enchantment.ars_nouveau.${getIdFromResourceLocation(label)}`, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)
        }
        return getLabel(`enchantment.minecraft.${getIdFromResourceLocation(label)}`, $languagesStore, $chosenLanguageStore, $minecraftLanguageStore)
    }

    $: mappedInputItems = recipeData.pedestalItems.map(ingredient => ingredient.item || ingredient.tag)
</script>

<h4>Enchanting Apparatus Recipe</h4>
<div class="flex items-center justify-around">
    <Card class="flex flex-col items-center">
        Pedestal Items:
        <div class="grid grid-rows-3 grid-cols-3 gap-2">
            {#each mappedInputItems as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </Card>
    +
    <Card class="flex flex-col items-center">
        Item to be enchanted
        {#if recipeData.level > 1}
            *
        {/if}
    </Card>
    {#if recipeData.sourceCost}
        +
        <Card>Source: {recipeData.sourceCost}</Card>
    {/if}
    =>
    <Card>
        {`The Enchantment ${getEnchantmentLabel(recipeData.enchantment)} at level ${recipeData.level} will be applied to your item`}
    </Card>
</div>

{#if recipeData.level > 1}
    <p class="text-center">*The item needs to have the previous level of the enchantment</p>
{/if}
