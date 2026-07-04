<script lang="ts">
	import { dragonbloodBlessings } from '$lib/dataConstants';
	import type { Player } from '$lib/gearBuilder/playerClasses';
	import { floorDecimal } from '$lib/utils/floorDecimal';
	import { isMobile } from '$lib/utils/mobileStore';
	import { fade } from 'svelte/transition';

	export let player: Player;

	let tooltip: HTMLDivElement | HTMLButtonElement;
	let tooltiptext: HTMLSpanElement;
	let tooltiparrow: HTMLDivElement;
	let menuIsActive = false;

	let baseHealth = 91 + player.level * 9;
</script>

{#if !$isMobile}
	<div
		role="tooltip"
		class="tooltip text-xl m-3"
		style="font-family: Merriweather;"
		bind:this={tooltip}
		on:mouseover={() => {
			tooltiparrow.style.top =
				(tooltip.clientHeight / tooltiptext.clientHeight / 2 +
					tooltiparrow.offsetHeight / 2 / tooltiptext.clientHeight) *
					100 +
				'%';
		}}
		on:focus={() => {
			tooltiparrow.style.top =
				(tooltip.clientHeight / tooltiptext.clientHeight / 2 +
					tooltiparrow.offsetHeight / 2 / tooltiptext.clientHeight) *
					100 +
				'%';
		}}
	>
		Health : <span style="font-family: Merriweather;" class=" text-green-500 text-xl m-3">
			{floorDecimal(player.health, 2)}
		</span>

		<span
			style="font-family: Merriweather;"
			class="tooltiptext !w-auto min-w-[240px]"
			bind:this={tooltiptext}
		>
			<div class="p-3">
				<div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-left text-sm">
					<span class="text-gray-400">Base Health:</span>
					<span class="text-right">{baseHealth}</span>

					<span class="text-gray-400">Defense:</span>
					<span class="text-right text-gray-500">
						+ {floorDecimal(player.build.getBuildStats().defense, 1)}
					</span>

					<span class="text-gray-400">Dragonblood:</span>
					<span class="text-right text-red-500">
						+ {floorDecimal(baseHealth * dragonbloodBlessings[player.blessing], 2) || 0}
					</span>

					<hr class="col-span-2 border-zinc-700 my-1" />

					<span class=" text-white">Total Health:</span>
					<span class="text-right text-green-500">
						{floorDecimal(player.health, 2)}
					</span>
				</div>

				<div class="tooltiparrow" bind:this={tooltiparrow}></div>
			</div>
		</span>
	</div>
{/if}

{#if $isMobile}
	<button
		class="tooltip text-xl m-3 text-left"
		style="font-family: Merriweather;"
		bind:this={tooltip}
		on:click={() => {
			menuIsActive = true;
		}}
	>
		Health : <span style="font-family: Merriweather;" class="text-green-500 text-xl m-3">
			{floorDecimal(player.health, 2)}
		</span>

		{#if menuIsActive}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="z-30 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-95 fixed flex flex-col justify-center items-center p-6"
				in:fade={{ duration: 100 }}
				out:fade={{ duration: 100 }}
				on:click={(event) => {
					event.stopPropagation();
				}}
			>
				<div
					class="space-y-6 flex flex-col justify-center items-center z-40 w-full max-w-xs border border-white rounded p-4 bg-black"
					style="font-family: Merriweather;"
				>
					<div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 text-left text-base w-full">
						<span class="text-gray-400">Base Health:</span>
						<span class="text-right text-white">{baseHealth}</span>

						<span class="text-gray-400">Defense:</span>
						<span class="text-right text-gray-500">
							+ {floorDecimal(player.build.getBuildStats().defense, 2)}
						</span>

						<span class="text-gray-400">Dragonblood:</span>
						<span class="text-right text-red-500">
							+ {floorDecimal(baseHealth * dragonbloodBlessings[player.blessing], 2) || 0}
						</span>

						<hr class="col-span-2 border-zinc-700 my-1" />

						<span class="font-bold text-white">Total Health:</span>
						<span class="text-right text-green-500">
							{floorDecimal(player.health, 2)}
						</span>
					</div>

					<div class="flex flex-row space-x-2">
						<button
							on:click={() => {
								menuIsActive = false;
							}}
						>
							<div
								class="w-16 h-16 bg-black border rounded border-white text-white font-bold text-lg items-center object-contain relative"
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
							</div>
						</button>
					</div>
				</div>
			</div>
		{/if}
	</button>
{/if}

<style>
	.tooltip {
		position: relative;
		display: inline-block;
		border-bottom: 1px dotted white;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 200%;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 2px;
		position: absolute;
		z-index: 1;
		top: -5px;
		left: 120%;
		font-size: 16px;
		font-weight: 400;
		border-width: 1px;
		border-radius: 0.25rem;
		border-color: white;
	}

	.tooltip .tooltiptext .tooltiparrow {
		content: '';
		position: absolute;
		top: 50%;
		right: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent white transparent transparent;
	}
	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
	.tooltip:focus .tooltiptext {
		visibility: visible;
	}
</style>
