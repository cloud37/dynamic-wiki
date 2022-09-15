<script context="module" lang="ts">
    const prepareRecipe = (recipeData: App.ShapedRecipe) => {
        return [...recipeData.pattern.join("")].map(character => {
            if (character !== ' ') {
                return recipeData.key[character];
            } else {
                return null;
            }
        });
    }
</script>

<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.ShapedRecipe;

    $: craftingGrid = prepareRecipe(recipeData)
</script>

<h4>Shaped Recipe:</h4>
<div class="flex items-center justify-around">
    <Card>
        <div class="grid grid-rows-3 grid-cols-3 gap-2">
            {#each craftingGrid as craftingGridSlot}
                {#if craftingGridSlot}
                    <Ingredient ingredient={craftingGridSlot}/>
                {:else }
                    <div/>
                {/if}
            {/each}
        </div>
    </Card>
    =>
    <Card>
        <Item item={recipeData.result.item}/>
    </Card>
</div>
