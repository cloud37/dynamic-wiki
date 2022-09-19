<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.ShapelessRecipe;


</script>

<h4 class="mb-3">Shapeless Recipe</h4>
<div class="craftingRecipe">
    <Card>
        <div class="craftingGrid">
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
