<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.ImbuementRecipe;

    $: console.log(recipeData)
    $: mappedInputItems = recipeData.pedestalItems.map(ingredient => ingredient.item || ingredient.tag);
</script>

<h4>Enchanting Apparatus Recipe</h4>
<div class="flex items-center justify-around mt-3">
    <Card body="flex flex-col items-center">
        Pedestal Items (Will not be consumed):
        {#if !mappedInputItems || mappedInputItems.length === 0}
            No Pedestal Items are necessary
        {:else }
            <div class="grid grid-rows-3 grid-cols-3 gap-2">
                {#each mappedInputItems as ingredient}
                    <Ingredient {ingredient}/>
                {/each}
            </div>
        {/if}

    </Card>
    +
    <Card>
        <div class="flex flex-col items-center">
            Reagent:
            <Ingredient ingredient={recipeData.input}/>
        </div>
    </Card>
    +
    <Card>
        Source: {recipeData.source}*
    </Card>

    =>
    <Card>
        <Item item={recipeData.output}/>
    </Card>
</div>
<p class="text-center">*Source slowly accumulates on it's own in the Imbuement Chamber. Provide a full Source Jar for
    quicker crafting</p>
