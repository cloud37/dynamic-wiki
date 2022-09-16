<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.GlyphRecipe;

    $: mappedInputItems = recipeData.inputItems.map(ingredient => ingredient.item || ingredient.tag)
</script>

<h4>Glyph Recipe</h4>
<div class="flex items-center justify-around">
    <Card>
        <div class="grid grid-rows-3 grid-cols-3 gap-2">
            {#each mappedInputItems as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </Card>
    +
    <Card body="flex flex-col items-center">
        EXP-Cost: {recipeData.exp}
    </Card>

    =>
    <Card>
        <Item item={recipeData.output.replace("glyph_", "")}/>
    </Card>
</div>
