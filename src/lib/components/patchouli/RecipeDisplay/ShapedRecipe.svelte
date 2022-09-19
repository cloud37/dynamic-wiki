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

<h4 class="mb-3">Shaped Recipe:</h4>
<div class="craftingRecipe">
    <Card>
        <div class="craftingGrid">
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
