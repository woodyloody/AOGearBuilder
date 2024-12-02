<script lang="ts">
	import BlackButton from '$lib/components/misc/BlackButton.svelte';
	import type { CurrentShipBuild } from '$lib/shipBuilder/ShipClass';

	export let SessionShip: CurrentShipBuild;
</script>

<BlackButton parentText={SessionShip.getShip().name}></BlackButton>
