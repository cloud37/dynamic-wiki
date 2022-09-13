<script lang="ts">
    import {AppBar, LightSwitch} from "@brainandbones/skeleton";
    import {storeMobileDrawer} from "$lib/stores/uiState";

    // Drawer Handler
    function drawerOpen(): void {
        storeMobileDrawer.set(true);
    }
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <!-- Drawer Menu -->
        <div class="lg:hidden mr-2 p-1 cursor-pointer" on:click={drawerOpen}>
            <img alt="open the mobile menu" height="20px" src="/menu.svg" width="20px">
        </div>
        <LightSwitch origin="tr"/>
    </svelte:fragment>
    <a class="text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4" href="/"
       title="Return to main page">Ars Nouveau Wiki</a>
</AppBar>