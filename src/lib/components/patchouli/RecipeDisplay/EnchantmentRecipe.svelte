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

<h4 class="mb-3">Enchanting Apparatus Recipe</h4>
<div class="craftingRecipe">
    <Card body="flex flex-col items-center">
        <span>Pedestal Items:</span>
        <div class="craftingGrid">
            {#each mappedInputItems as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </Card>
    +
    <Card body="flex flex-col items-center justify-center craftingGridItem">
        Item to be enchanted
        {#if recipeData.level > 1}
            *
        {/if}
    </Card>
    {#if recipeData.sourceCost}
        +
        <Card body="flex flex-col items-center justify-center craftingGridItem">
            <span>Source: </span>
            <span>{recipeData.sourceCost}</span>
        </Card>
    {/if}
    =>
    <Card>
        {`The Enchantment ${getEnchantmentLabel(recipeData.enchantment)} at level ${recipeData.level} will be applied to your item`}
    </Card>
</div>

{#if recipeData.level > 1}
    <p class="text-center">*The item needs to have the previous level of the enchantment</p>
{/if}
