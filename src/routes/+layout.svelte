<script lang="ts">
    import '../app.postcss';
    import Navigation from "$lib/components/navigation/Navigation.svelte";
    import '@brainandbones/skeleton/styles/themes/theme-modern.css';
    import {AppBar, AppShell} from "@brainandbones/skeleton";
    import {page} from '$app/stores'
    import {afterNavigate} from "$app/navigation";
    import {storeCurrentUrl} from "$lib/stores/uiState";
    import NavigationDrawer from "$lib/components/navigation/NavigationDrawer.svelte";
    import Navigation2 from "$lib/components/navigation/Navigation2.svelte";

    // Lifecycle Events
    afterNavigate(() => {
        // Store current page route URL
        storeCurrentUrl.set($page.url.pathname);
        // Scroll to top
        const elemPage = document.querySelector('#page');
        if (elemPage !== null) {
            elemPage.scrollTop = 0;
        }
    });
</script>

<svelte:head>
    <meta content="Ars Nouveau Wiki | An automatically generated Wiki for Ars Nouveau" name="title">
    <meta content={`This is a wiki page generated automatically from the Patchouli Data in the Ars Noveau wiki. Therefore, it's pretty janky`}
          name="description">
    <meta content={$page.url.toString()} property="og:url">
    <meta content="Ars Nouveau Wiki | An automatically generated Wiki for Ars Nouveau" property="og:title">
    <meta content={`This is a wiki page generated automatically from the Patchouli Data in the Ars Noveau wiki. Therefore, it's pretty janky`}
          property="og:description">
</svelte:head>

<NavigationDrawer/>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar><a href="/"><h1 class="text-center text-2xl">Ars Nouveau Wiki</h1></a></AppBar>
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
        <Navigation2 class="hidden lg:block w-[300px]"/>
    </svelte:fragment>
    <svelte:fragment slot="pageFooter">
        <footer class="flex justify-end m-5 appFooter"><p>Ars Nouveau Wiki</p></footer>
    </svelte:fragment>
    <div class="m4" style="height: 90vh;">
        <slot/>
    </div>
</AppShell>
