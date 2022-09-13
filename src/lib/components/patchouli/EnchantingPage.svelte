<script lang="ts">
    import {getRecipe} from "$lib/recipes";

    export let recipe: string;
    $: recipeData = getRecipe(recipe)
</script>

<p class="whitespace-pre-line">{JSON.stringify(recipeData, null, 2)}</p>
