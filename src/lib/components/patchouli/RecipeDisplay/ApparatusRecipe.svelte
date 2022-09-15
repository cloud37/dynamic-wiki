<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.EnchantingApparatusRecipe;
</script>

<h4>Enchanting Apparatus Recipe</h4>
<div class="flex items-center justify-around">
    <Card class="flex flex-col items-center">
        Pedestal Items
        <div class="grid grid-rows-3 grid-cols-3 gap-2">
            {#each recipeData.pedestalItems as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </Card>
    +
    <Card class="flex flex-col items-center">
        Reagent
        <Item item={recipeData.reagent.item}/>
    </Card>
    {#if recipeData.sourceCost}
        +
        <Card>Source: {recipeData.sourceCost}</Card>
    {/if}
    =>
    <Card>
        <Item item={recipeData.output.item}/>
    </Card>
</div>
