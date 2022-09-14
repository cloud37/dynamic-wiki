<script lang="ts">
	import { Drawer } from '@brainandbones/skeleton';
	import { storeMobileDrawer } from '$lib/stores/uiState.js';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
</script>

<Drawer display="lg:hidden" open={storeMobileDrawer}>
	<Navigation embedded={true} />
</Drawer>
