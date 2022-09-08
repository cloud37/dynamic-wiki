<script lang="ts">
    import {getRecipe} from "$lib/recipes";

    export let recipe: string;
    $: recipeData = getRecipe(recipe)
</script>

<p>{JSON.stringify(recipeData)}</p>
