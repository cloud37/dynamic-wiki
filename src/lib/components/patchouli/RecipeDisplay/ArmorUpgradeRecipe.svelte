<script lang="ts">

    import {Card} from "@brainandbones/skeleton";
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";

    export let recipeData: App.ArmorUpgradeRecipe;
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
            <span>The Armor Piece you want to upgrade</span>
        </div>
    </Card>
    {#if recipeData.sourceCost}
        +
        <Card>Source: {recipeData.sourceCost}</Card>
    {/if}
    =>
    <Card>
        {`The Tier of your Armor Piece will have increased to ${recipeData.tier + 1}`}
    </Card>
</div>
