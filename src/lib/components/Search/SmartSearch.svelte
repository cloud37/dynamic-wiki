<script lang="ts">
    import {searchStore} from "$lib/stores/searchStore";
    import Search from "$lib/components/Search/Search.svelte";
    import Dropdown from "$lib/components/Search/Dropdown.svelte";
    import {List, ListItem} from "@brainandbones/skeleton";

    export let mobile: false;

    let value: string;
    let searchElement: HTMLElement;

    let focus = false;
    const onFocus = () => {
        focus = true;
    }
    const onBlur = () => {
        focus = false;
    }

    const getSearchResults = (value?: string) => {
        if ($searchStore && $searchStore.search && value && value.length > 2) {
            return $searchStore.search(value)
        } else {
            return [];
        }
    }

    $: results = getSearchResults(value).slice(0, 5).map(foundValue => foundValue.item)
    $: console.log(`focus: ${focus} results: ${results}`)
</script>

<div
        aria-controls="search-dropdown"
        aria-expanded={focus && results}
        aria-haspopup="listbox"
        aria-owns="listbox"
        bind:this={searchElement}
        class:dropdown={results.length > 0}
        data-svelte-typeahead
        role="combobox"
>
    <Search bind:value label="Search" on:blur={onBlur} on:focus={onFocus}/>
    <Dropdown id="search-dropdown" open={focus && !!results} openLeft={mobile} parentElement={searchElement}>
        <List slot="content" tag="nav">
            {#each results as result}
                <ListItem href={result.href}>{result.title}</ListItem>
            {/each}
        </List>
    </Dropdown>
</div>