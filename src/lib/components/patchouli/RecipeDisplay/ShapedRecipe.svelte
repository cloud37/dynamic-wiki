<script lang="ts">

    import RecipeWarning from "$lib/components/patchouli/RecipeDisplay/RecipeWarning.svelte";

    export let recipeData: App.ShapedRecipe;
</script>

<h4>Shaped Recipe:</h4>
<div class="flex align-center">
    <div></div>
    =>
    <div></div>
</div>
<RecipeWarning/>
