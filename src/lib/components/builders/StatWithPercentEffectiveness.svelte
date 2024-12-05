<script lang="ts">
	import { isMobile } from '$lib/utils/mobileStore';
	import { writable } from 'svelte/store';
	import { calculateSubstatEfficiency } from '$lib/utils/calculateSubstatEfficiency';
	import type { Player } from '$lib/gearBuilder/playerClasses';
	import { fade } from 'svelte/transition';
	import { staticImagesRootFolder } from '$lib/dataConstants';
	import { camelCaseToWords, capitalizeEachWord } from '$lib/utils/admin/stringUtils';
	import { getContext } from 'svelte';

	export let showName: boolean;
	export let stat: string;
	export let itemStats: any;
	export let chosenStat: any;
	export let player: Player;
	export let isItemMenu: boolean;

	const config: any = getContext('config');

	let isHovering = false;
	let mousePosition = { x: 0, y: 0 };
	const hoverWidth = writable(300);

	function setBoxPositionOverflow() {
		if (mousePosition.x + $hoverWidth + 20 >= document.documentElement?.clientWidth) {
			if (document.documentElement != null) {
				mousePosition.x = mousePosition.x - 40 - $hoverWidth + document.documentElement.scrollLeft;
			}
		} else {
			if (document.documentElement != null) {
				mousePosition.x += document.documentElement.scrollLeft;
			}
		}

		if (document.getElementById('hover') != null) {
			if (
				mousePosition.y + document.getElementById('hover').offsetHeight >=
				document.documentElement?.clientHeight
			) {
				if (document.documentElement != null) {
					mousePosition.y =
						mousePosition.y -
						document.getElementById('hover').offsetHeight +
						document.documentElement.scrollTop;
				}
			} else {
				if (document.documentElement != null) {
					mousePosition.y += document.documentElement.scrollTop;
				}
			}
		}
	}

	function createdHover(node: HTMLDivElement) {
		setBoxPositionOverflow();
	}

	function handleMouseOver(event: MouseEvent) {
		isHovering = true;
		mousePosition = { x: event.clientX, y: event.clientY };

		setBoxPositionOverflow();
	}

	function handleMouseOut() {
		isHovering = false;
	}

	let isMenuActive = false;

	// this section is to automatically calculate the percentages and group them if they share a percent with another variable. its poorly done but works for now
	function formatEfficiency(value: number) {
		return (value < 0 ? '' : '+') + value.toString();
	}

	let substatEfficiencies: Record<string, number> = {};

	let order: Record<string, string[]> = {};

	let values: Record<string, string> = {};

	if (!isItemMenu) {
		for (let [key, value] of Object.entries(
			config.efficiencies.values as Record<string, Record<string, string>>
		)) {
			values[key] = value.value;
		}

		substatEfficiencies[stat] = calculateSubstatEfficiency(
			chosenStat[stat],
			stat,
			player,
			values,
			config.efficiencies.formulas
		);

		for (let [key, value] of Object.entries(config.efficiencies.values as Record<string, number>)) {
			if (key.startsWith(stat)) {
				substatEfficiencies[key] = calculateSubstatEfficiency(
					chosenStat[stat],
					key,
					player,
					values,
					config.efficiencies.formulas
				);
			}
		}

		// sort based on order assigned

		for (let [key, value] of Object.entries(substatEfficiencies)) {
			if (value in order) {
				order[value].push(key);
			} else {
				order[value] = [key];
			}
		}
	}
</script>

{#if !$isMobile}
	<button on:mousemove={handleMouseOver} on:mouseleave={handleMouseOut}>
		<div class="flex items-center justify-center">
			<img class="h-6" src="{staticImagesRootFolder}/stats/{stat}.png" alt={stat} />
			<p
				style="font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: {itemStats[
					stat
				].fillColor}; -webkit-text-stroke: 1.5px; -webkit-text-stroke-color: {itemStats[stat]
					.strokeColor}; text-align: center;"
			>
				{#if showName && chosenStat[stat] > 0}
					+
				{/if}
				{chosenStat[stat]}
				{#if showName}{itemStats[stat].name}{/if}
			</p>
		</div>
	</button>

	{#if isHovering}
		<div
			use:createdHover
			class="z-40 border border-white rounded"
			id="hover"
			style="
		  position: absolute;
		  background-color: black;
		  width: {$hoverWidth}px;
		  padding: 10px;
		  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		  color: white;
		  top: {mousePosition.y}px; 
		  left: {mousePosition.x + 20}px;
		  z-index : 40
		  
		"
		>
			<div class="items-center text-center z-40">
				<p
					style="font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: {itemStats[
						stat
					].fillColor}; -webkit-text-stroke: 1px; -webkit-text-stroke-color: {itemStats[stat]
						.strokeColor}; text-align: center;"
				>
					{#each Object.entries(order) as [key, value]}
						{#each value as statKey}
							{statKey != value[0] ? ' / ' : ''}{statKey in config.efficiencies.values &&
							'name' in config.efficiencies.values[statKey]
								? config.efficiencies.values[statKey]['name']
								: capitalizeEachWord(camelCaseToWords(statKey))}
						{/each}
						: {formatEfficiency(substatEfficiencies[value[0]])}%<br />
					{/each}
					{#if stat == 'regeneration'}
						<br />
						<span class=" mt-8">Health gained per tick</span><br />
						Out of Combat : {(
							player.health *
							0.01 *
							(substatEfficiencies['regeneration'] / 100)
						).toFixed(2)}<br />
						In Combat : {(
							(93 + player.level * 7 + player.vitalityPoints * 4) *
							0.01 *
							(substatEfficiencies['regeneration'] / 100)
						).toFixed(2)}
					{/if}
				</p>
			</div>
		</div>
	{/if}
{/if}

<!-- 
	
	
	MOBILE VIEW 


-->
{#if $isMobile}
	<button on:click={() => (isMenuActive = !isMenuActive)}>
		<div class="flex items-center justify-center">
			<img class="h-6" src="{staticImagesRootFolder}/stats/{stat}.png" alt={stat} />
			<p
				style="font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: {itemStats[
					stat
				].fillColor}; -webkit-text-stroke: 1.5px; -webkit-text-stroke-color: {itemStats[stat]
					.strokeColor}; text-align: center;"
			>
				{#if showName && chosenStat[stat] > 0}
					+
				{/if}
				{chosenStat[stat]}
				{#if showName}{itemStats[stat].name}{/if}
			</p>
		</div>
	</button>

	{#if isMenuActive}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="z-30 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-95 fixed flex flex-col justify-center items-center"
			in:fade={{ duration: 100 }}
			out:fade={{ duration: 100 }}
			on:click={() => {
				event.stopPropagation();
			}}
		>
			<div class="items-center text-center z-40">
				<p
					style="font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: {itemStats[
						stat
					].fillColor}; -webkit-text-stroke: 1px; -webkit-text-stroke-color: {itemStats[stat]
						.strokeColor}; text-align: center;"
				>
					{#each Object.entries(order) as [key, value]}
						{#each value as statKey}
							{statKey != value[0] ? ' / ' : ''}{statKey in config.efficiencies.values &&
							'name' in config.efficiencies.values[statKey]
								? config.efficiencies.values[statKey]['name']
								: capitalizeEachWord(camelCaseToWords(statKey))}
						{/each}
						: {formatEfficiency(substatEfficiencies[value[0]])}%<br />
					{/each}
					{#if stat == 'regeneration'}
						<br />
						<span class=" mt-8">Health gained per tick</span><br />
						Out of Combat : {(
							player.health *
							0.01 *
							(substatEfficiencies['regeneration'] / 100)
						).toFixed(2)}<br />
						In Combat : {(
							(93 + player.level * 7 + player.vitalityPoints * 4) *
							0.01 *
							(substatEfficiencies['regeneration'] / 100)
						).toFixed(2)}
					{/if}
				</p>
			</div>
			<div class="flex flex-row space-x-2 mt-5">
				<button
					on:click={() => {
						isMenuActive = false;
					}}
					class="mb-4 w-20 h-20 bg-black border rounded border-white text-white font-bold text-lg py-2 px-4 items-center relative"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						fill="currentColor"
						class="bi bi-x-lg"
						viewBox="0 0 16 16"
						style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
					>
						<path
							d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
						/>
					</svg>
				</button>
			</div>
		</div>
	{/if}
{/if}
