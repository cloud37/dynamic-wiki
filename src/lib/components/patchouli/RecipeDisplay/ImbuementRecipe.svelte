<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.ImbuementRecipe;


</script>

<h4>Enchanting Apparatus Recipe</h4>
<div class="flex items-center justify-around">
    <Card class="flex flex-col items-center">
        Pedestal Items (Will not be consumed):
        <div class="grid grid-rows-3 grid-cols-3 gap-2">
            {#each recipeData.pedestalItems as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </Card>
    +
    <Card class="flex flex-col items-center">
        Reagent:
        <Ingredient ingredient={recipeData.input.item}/>
    </Card>
    +
    <Card>
        Source: {recipeData.source}*
    </Card>

    =>
    <Card>
        <Item item={recipeData.output.item}/>
    </Card>
</div>
<p class="text-center">*Source slowly accumulates on it's own in the Imbuement Chamber. Provide a full Source Jar for
    quicker crafting</p>
