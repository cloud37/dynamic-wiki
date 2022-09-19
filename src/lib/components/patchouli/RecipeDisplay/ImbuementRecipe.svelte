<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.ImbuementRecipe;

    $: console.log(recipeData)
    $: mappedInputItems = recipeData.pedestalItems.map(ingredient => ingredient.item || ingredient.tag);
</script>

<h4 class="mb-3">Enchanting Apparatus Recipe</h4>
<div class="craftingRecipe">
    <Card body="flex flex-col items-center">
        <span>Pedestal Items (Will not be consumed):</span>
        {#if !mappedInputItems || mappedInputItems.length === 0}
            <span>No Pedestal Items are necessary</span>
        {:else }
            <div class="craftingGrid">
                {#each mappedInputItems as ingredient}
                    <Ingredient {ingredient}/>
                {/each}
            </div>
        {/if}

    </Card>
    +
    <Card body="flex flex-col items-center justify-center craftingGridItem">
        Reagent:
        <Ingredient ingredient={recipeData.input}/>
    </Card>
    +
    <Card body="flex flex-col items-center justify-center craftingGridItem">
        <span>Source: </span>
        <span>{recipeData.source}*</span>
    </Card>

    =>
    <Card>
        <Item item={recipeData.output}/>
    </Card>
</div>
<p class="text-center">*Source slowly accumulates on it's own in the Imbuement Chamber. Provide a full Source Jar for
    quicker crafting</p>
