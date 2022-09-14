<script lang="ts">
    import {getRecipe} from '$lib/recipes';
    import ShapedRecipe from "$lib/components/patchouli/RecipeDisplay/ShapedRecipe.svelte";
    import ShapelessRecipe from "$lib/components/patchouli/RecipeDisplay/ShapelessRecipe.svelte";

    export let recipe: string;
    $: recipeData = getRecipe(recipe) as App.Recipe;
    $: displayedComponent = recipeData.type === 'minecraft:crafting_shaped' ? ShapedRecipe : ShapelessRecipe
</script>

<svelte:component recipeData={recipeData} this={displayedComponent}/>
