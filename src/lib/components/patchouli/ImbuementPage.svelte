<script lang="ts">
    import {getRecipe} from '$lib/recipes';
    import {recipesStore} from "$lib/stores/fileStore";

    export let recipe: string;
    $: recipeData = getRecipe(recipe, $recipesStore);
</script>

<p class="whitespace-pre-line">{JSON.stringify(recipeData, null, 2)}</p>
