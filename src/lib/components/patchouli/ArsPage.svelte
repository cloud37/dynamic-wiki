<script lang="ts">
    import {getRecipe} from '$lib/recipes';
    import {recipesStore} from "$lib/stores/fileStore";
    import ApparatusRecipe from "$lib/components/patchouli/RecipeDisplay/ApparatusRecipe.svelte";
    import ImbuementRecipe from "$lib/components/patchouli/RecipeDisplay/ImbuementRecipe.svelte";
    import EnchantmentRecipe from "$lib/components/patchouli/RecipeDisplay/EnchantmentRecipe.svelte";
    import GlyphRecipe from "$lib/components/patchouli/RecipeDisplay/GlyphRecipe.svelte";
    import ArmorUpgradeRecipe from "$lib/components/patchouli/RecipeDisplay/ArmorUpgradeRecipe.svelte";


    const getRecipeDisplay = (type: string) => {
        switch (type) {
            case 'ars_nouveau:enchanting_apparatus':
                return ApparatusRecipe;
            case 'ars_nouveau:imbuement':
                return ImbuementRecipe;
            case 'ars_nouveau:enchantment':
                return EnchantmentRecipe;
            case 'ars_nouveau:glyph':
                return GlyphRecipe;
            case 'ars_nouveau:armor_upgrade':
                return ArmorUpgradeRecipe;
            default:
                return undefined;
        }
    }

    export let recipe: string;
    $: recipeData = getRecipe(recipe, $recipesStore);
    $: displayedComponent = getRecipeDisplay(recipeData.type)
</script>

<svelte:component recipeData={recipeData} this={displayedComponent}/>
