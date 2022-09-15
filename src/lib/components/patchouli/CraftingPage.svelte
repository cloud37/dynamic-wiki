<script lang="ts">
    import {getRecipe} from '$lib/recipes';
    import ShapedRecipe from "$lib/components/patchouli/RecipeDisplay/ShapedRecipe.svelte";
    import ShapelessRecipe from "$lib/components/patchouli/RecipeDisplay/ShapelessRecipe.svelte";
    import RecipeWarning from "$lib/components/patchouli/RecipeDisplay/RecipeWarning.svelte";
    import {recipesStore} from "$lib/stores/fileStore";

    export let recipe: string;
    export let recipe2: string;
    $: recipeData = getRecipe(recipe, $recipesStore) as App.Recipe;
    $: recipeData2 = getRecipe(recipe2, $recipesStore) as App.Recipe;
    $: displayedComponent = recipeData.type === 'minecraft:crafting_shaped' ? ShapedRecipe : ShapelessRecipe
    $: displayedComponent2 = recipeData2?.type === 'minecraft:crafting_shaped' ? ShapedRecipe : ShapelessRecipe
</script>

<svelte:component recipeData={recipeData} this={displayedComponent}/>
{#if recipe2}
    <svelte:component recipeData={recipeData2} this={displayedComponent2}/>
{/if}
<RecipeWarning/>