<script lang="ts">
	import { isMobile } from '$lib/utils/mobileStore';
	import { fade } from 'svelte/transition';
	let tooltip: HTMLDivElement | HTMLButtonElement;
	let tooltiptext: HTMLSpanElement;
	let tooltiparrow: HTMLDivElement;
	let menuIsActive = false;
	let info =
		'Efficiency Points (EP) is a score of how efficient the stats on a piece/build are. Generally higher is better. 1 Power = 3EP, 1 Defense = 1/3EP, 1 Substat = 1EP';
</script>

{#if !$isMobile}
	<div
		role="tooltip"
		class="tooltip"
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
		EP
		<span class="tooltiptext" bind:this={tooltiptext}
			>{info}
			<div class="tooltiparrow" bind:this={tooltiparrow}></div></span
		>
	</div>
{/if}

{#if $isMobile}
	<button
		class="tooltip"
		bind:this={tooltip}
		on:click={() => {
			menuIsActive = true;
		}}
	>
		EP
		{#if menuIsActive}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="z-30 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-95 fixed flex flex-col justify-center items-center"
				in:fade={{ duration: 100 }}
				out:fade={{ duration: 100 }}
				on:click={(event) => {
					event.stopPropagation();
				}}
			>
				<div class="space-y-2 flex flex-col justify-center items-center z-40">
					{info}
					<div class="flex flex-row space-x-2">
						<button
							on:click={() => {
								menuIsActive = false;
							}}
						>
							<div
								class=" my-4 w-24 h-24 bg-black border rounded border-white text-white font-bold text-lg items-center object-contain relative"
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
		width: 800%;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 2px;
		position: absolute;
		z-index: 1;
		top: -5px;
		right: 120%;
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
		left: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent transparent white;
	}
	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
	.tooltip:focus .tooltiptext {
		visibility: visible;
	}
</style>
