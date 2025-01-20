<script lang="ts">
	import type { AnyItemDetails } from '$lib/types/itemTypes';

	import { rarityColors, staticImagesRootFolder } from '$lib/utils';
	import { onMount } from 'svelte';

	let { item }: { item: AnyItemDetails } = $props();

	let loaded = $state(false);
	let failed = $state(false);
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = item.imageId || '';
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};

		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

<div
	class="relative flex h-full w-full items-center justify-center"
	style="border-color : {rarityColors[
		item.rarity || 'None'
	]}; border-width: 1px; background-color: #020202;"
>
	<!-- Stat Type Overlay - Magic, Vitality, Strength -->
	{#if item.statType && item.statType != 'None'}
		<img
			style="opacity: {item.statType ? '1' : '0'};"
			src="{staticImagesRootFolder}/Misc/{item.statType}Items.png"
			alt="Magic"
			class="absolute bottom-0 right-0 z-10 h-full w-full"
		/>
	{/if}

	<!-- Gem Slots Overlay-->
	<div class="absolute bottom-0 right-0 z-20 flex flex-row">
		{#each { length: item.gemNo } as _, i}
			<img src="{staticImagesRootFolder}/Misc/gemslot.png" alt="Gem slot" class=" h-5 w-5" />
		{/each}
	</div>

	<!-- Item Image / Text fallback -->
	{#if loaded}
		<img class="h-full w-full object-contain" src={item.imageId} alt={item.name} />
	{:else if failed}
		<h1 class="text-center" style="color:white;">
			{item.name || 'None'}
		</h1>
	{/if}
</div>
