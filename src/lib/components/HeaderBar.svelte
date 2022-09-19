<script lang="ts">
    import {AppBar, LightSwitch} from '@brainandbones/skeleton';
    import {storeMobileDrawer} from '$lib/stores/uiState';
    import MenuIcon from '$lib/components/icons/MenuIcon.svelte';
    import {scrollSelectionIntoView} from '$lib/components/navigation/scrollHelper';
    import {browser} from '$app/environment'
    import SmartSearch from "$lib/components/Search/SmartSearch.svelte";
    import LanguageSelection from "$lib/components/LanguageSelection.svelte";

    // Drawer Handler
    function drawerOpen(): void {
        storeMobileDrawer.set(true);
        scrollSelectionIntoView();
    }
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <!-- Drawer Menu -->
        <div class="lg:hidden mr-2 p-1 cursor-pointer" on:click={drawerOpen}>
            <MenuIcon style="width: 20px; height: 20px; fill: rgb(var(--color-primary-500))"/>
        </div>
        <LightSwitch origin="tr"/>
    </svelte:fragment>
    <a
            class="text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4"
            href="/"
            id="ars_nouveau_wiki"
            title="Return to main page">Ars Nouveau Wiki</a
    >
    <svelte:fragment slot="trail">
        <div class="hidden lg:block">
            <LanguageSelection/>
        </div>
        {#if browser}
            <div class="hidden lg:block">
                <SmartSearch/>
            </div>
        {/if}
    </svelte:fragment>
</AppBar>
