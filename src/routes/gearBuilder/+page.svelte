<script lang="ts">
	import { Player } from '$lib/gearBuilder/Player';
	import type { AnyItemDetails } from '$lib/types/itemTypes';
	import type { AOTConfig } from '$lib/types/utilTypes';
	import type { PageData } from '../$types';
	import type { PlayerBuildSlot } from '$lib/gearBuilder/PlayerBuildSlot';
	import MenuTrigger from '$lib/components/builders/menu/MenuTrigger.svelte';

	let { data }: { data: PageData & { items: AnyItemDetails[]; config: AOTConfig } } = $props();

	let database = data.items;

	let player = new Player(data.items, data.config);

	let slots = Object.entries(player.build.slots) as [
		keyof typeof player.build.slots,
		PlayerBuildSlot
	][];
	let update = $state(false);
	function updateState() {
		update = !update;
	}
</script>

{#key update}
	<!-- Horizontal Row -->
	<div class="flex flex-row space-x-10">
		<!-- accessory1 / accessory2 / accessory3 -->
		<div>
			{#each slots as [slotKey, slot] (slotKey)}
				{#if ['accessory1', 'accessory2', 'accessory3'].includes(slotKey)}
					<div class="flex flex-col">
						<!-- Armor / Enchant / Modifier -->
						<div class="flex flex-row">
							<MenuTrigger {database} {player} item={slot.armor} {slotKey} {updateState} />
							<MenuTrigger {database} {player} item={slot.enchant} {slotKey} {updateState} />
							<MenuTrigger {database} {player} item={slot.modifier} {slotKey} {updateState} />
						</div>

						<!-- Gems -->
						<div class="flex flex-row">
							{#each slot.gems as gem, gemIndex}
								<MenuTrigger {database} {player} item={gem} {slotKey} {gemIndex} {updateState} />
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>

		<!-- chestplate / pants -->
		<div>
			{#each slots as [slotKey, slot] (slotKey)}
				{#if ['chestplate', 'pants'].includes(slotKey)}
					<div class="flex flex-col">
						<!-- Armor / Enchant / Modifier -->
						<div class="flex flex-row">
							<MenuTrigger {database} {player} item={slot.armor} {slotKey} {updateState} />
							<MenuTrigger {database} {player} item={slot.enchant} {slotKey} {updateState} />
							<MenuTrigger {database} {player} item={slot.modifier} {slotKey} {updateState} />
						</div>

						<!-- Gems -->
						<div class="flex flex-row">
							{#each slot.gems as gem, gemIndex}
								<MenuTrigger {database} {player} item={gem} {slotKey} {gemIndex} {updateState} />
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
{/key}
