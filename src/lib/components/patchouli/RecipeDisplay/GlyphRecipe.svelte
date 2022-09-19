<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";
    import {Card} from "@brainandbones/skeleton";

    export let recipeData: App.GlyphRecipe;

    $: mappedInputItems = recipeData.inputItems.map(ingredient => ingredient.item || ingredient.tag)
</script>

<h4 class="mb-3">Glyph Recipe</h4>
<div class="craftingRecipe">
    <Card>
        <div class="craftingGrid">
            {#each mappedInputItems as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </Card>
    +
    <Card body="flex flex-col items-center justify-center craftingGridItem">
        <span>EXP-Cost:</span>
        <span>{recipeData.exp}</span>
    </Card>

    =>
    <Card>
        <Item item={recipeData.output.replace("glyph_", "")}/>
    </Card>
</div>
