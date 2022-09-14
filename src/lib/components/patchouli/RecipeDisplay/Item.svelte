<script context="module" lang="ts">
    import {getTexture} from "$lib/textures";

    const getItemSrc = (item: string) => {
        let src = getTexture(item)
        if (src === 'Unknown Texture') {
            src = `/minecraft/textures/item/${item.split(":").pop()}.png`
        }
        return src;
    }
</script>

<script lang="ts">
    export let item: string;

    $: src = getItemSrc(item)
</script>

<img alt={`picture of the ingredient ${item}`} height="75px" {src} width="75px"/>

