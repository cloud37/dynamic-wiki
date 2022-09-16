<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.EnchantingApparatusRecipe;
    $: mappedInputItems = recipeData.pedestalItems.map(ingredient => ingredient.item || ingredient.tag);
</script>

<h4>Enchanting Apparatus Recipe</h4>
<div class="flex items-center justify-around mt-3">
    <Card body="flex flex-col items-center">
        Pedestal Items:
        <div class="grid grid-rows-3 grid-cols-3 gap-2">
            {#each mappedInputItems as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </Card>
    +
    <Card>
        <div class="flex flex-col items-center">
            Reagent:
            <Ingredient ingredient={recipeData.reagent[0]}/>
        </div>

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
