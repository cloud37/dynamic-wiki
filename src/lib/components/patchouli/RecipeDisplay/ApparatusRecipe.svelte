<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.EnchantingApparatusRecipe;
    $: mappedInputItems = recipeData.pedestalItems.map(ingredient => ingredient.item || ingredient.tag);
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
    <Card>
        <div class="flex flex-col items-center justify-center craftingGridItem">
            Reagent:
            <Ingredient ingredient={recipeData.reagent[0]}/>
        </div>

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
        <Item item={recipeData.output.item}/>
    </Card>
</div>
