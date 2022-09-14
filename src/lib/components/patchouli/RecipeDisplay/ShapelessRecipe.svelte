<script lang="ts">

    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import RecipeWarning from "$lib/components/patchouli/RecipeDisplay/RecipeWarning.svelte";

    export let recipeData: App.ShapelessRecipe;


</script>

<h4>Shapeless Recipe</h4>
<div class="flex items-center">
    <div class="grid grid-rows-3 grid-cols-3">
        {#each recipeData.ingredients as ingredient}
            <Ingredient {ingredient}/>
        {/each}
    </div>
    =>
    <div>
        <Item item={recipeData.result.item}/>
    </div>
</div>
<RecipeWarning/>
