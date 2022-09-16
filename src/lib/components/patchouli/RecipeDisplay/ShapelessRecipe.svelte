<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.ShapelessRecipe;


</script>

<h4>Shapeless Recipe</h4>
<div class="flex items-center justify-around mt-3">
    <Card>
        <div class="grid grid-rows-3 grid-cols-3 gap-2">
            {#each recipeData.ingredients as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </Card>
    =>
    <Card>
        <Item item={recipeData.result.item}/>
    </Card>
</div>
