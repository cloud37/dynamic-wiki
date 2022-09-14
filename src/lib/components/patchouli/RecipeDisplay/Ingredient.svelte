<script context="module" lang="ts">
    const isItem = (ingredient: App.Item | App.Tag): ingredient is App.Item => {
        return (<App.Item>ingredient).item !== undefined;
    }
</script>

<script lang="ts">
    import Tag from "$lib/components/patchouli/RecipeDisplay/Tag.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";

    export let ingredient: App.Item | App.Tag;

    $: displayAsItem = isItem(ingredient)
</script>

{#if displayAsItem}
    <Item item={ingredient.item}/>
{:else }
    <Tag tag={ingredient.tag}/>
{/if}