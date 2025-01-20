<script lang="ts">
	import type { Player } from '$lib/gearBuilder/Player';
	import type { AnyItemDetails } from '$lib/types/itemTypes';
	import { consoleBob } from '$lib/utils';
	import Item from './Item.svelte';

	let {
		player,
		slotKey,
		gemIndex,
		item,
		closeMenu,
		updateState
	}: {
		player?: Player;
		slotKey: keyof typeof Player.prototype.build.slots;
		gemIndex?: number;
		item: AnyItemDetails;
		closeMenu: () => void;
		updateState: () => void;
	} = $props();

	function handleClick() {
		if (player) {
			if (player.build.setGear(item, slotKey, gemIndex)) {
				consoleBob(item);
				updateState();
				closeMenu();
			}
		}
	}
</script>

<button class="aspect-square h-24 w-24" onclick={handleClick}>
	<Item {item} />
</button>
