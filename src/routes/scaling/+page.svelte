<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import type { anyItem } from '$lib/gearBuilder/itemTypes';
	import { Table } from '$lib/utils/admin/table';
	import toast from 'svelte-french-toast';
	import { rarityColors, staticImagesRootFolder } from '$lib/dataConstants';
	import { roundDown } from '$lib/utils/roundDown';
	import { EnchantTable, EnchantColumn } from '$lib/utils/admin/enchantTable';
	import { calculateStatScaling, findImbue } from '$lib/utils/calculateScaling';
	import { ScalingTable, ScalingColumn } from '$lib/utils/admin/scalingTable';
	import { getModifiers } from '$lib/utils/getModifiers';
	import RangeInput from '$lib/components/admin/inputs/RangeInput.svelte';
	import NumberInput from '$lib/components/admin/inputs/NumberInput.svelte';

	export let data: any;

	let config = data.config;
	let modifiers: Record<string, boolean> = getModifiers(data.items);

	let item: anyItem = {
		id: '',
		name: '',
		legend: '',
		mainType: 'Accessory',
		subType: 'None',
		statType: 'None',
		rarity: 'None',
		minLevel: 100,
		maxLevel: roundDown(config.maxLevel, 10),
		imageId: '',
		gemNo: 0,
		statsPerLevel: [],
		validModifiers: [],
		deleted: false
	};

	function setMin(e: Event & { currentTarget: EventTarget & Element }) {
		if (e.target) {
			statsTable.minLevel =
				Math.floor((parseInt((e.target as HTMLInputElement).value) || 10) / 10) * 10;
			statsTable.updateColumns();
		}
	}

	function setMax(e: Event & { currentTarget: EventTarget & Element }) {
		if (e.target) {
			statsTable.maxLevel =
				Math.floor((parseInt((e.target as HTMLInputElement).value) || 10) / 10) * 10;
			statsTable.updateColumns();
		}
	}

	const mainTypeStats = {
		gearStatic: [
			'power',
			'defense',
			'agility',
			'attackSpeed',
			'attackSize',
			'intensity',
			'regeneration',
			'piercing',
			'resistance',

			'insanity',
			'warding',
			'drawback'
		],
		gearIncrement: [
			'powerIncrement',
			'defenseIncrement',
			'agilityIncrement',
			'attackSpeedIncrement',
			'attackSizeIncrement',
			'intensityIncrement',
			'regenerationIncrement',
			'piercingIncrement',
			'resistanceIncrement',

			'insanity',
			'warding',
			'drawback'
		],
		enchant: [
			'powerIncrement',
			'defenseIncrement',
			'agilityIncrement',
			'attackSpeedIncrement',
			'attackSizeIncrement',
			'intensityIncrement',
			'regenerationIncrement',
			'piercingIncrement',
			'resistanceIncrement',

			'insanity',
			'warding',
			'drawback'
		],
		ship: [
			'durability',
			'magicStorage',
			'ramDefense',
			'ramStrength',
			'resilience',
			'speed',
			'stability',
			'turning',

			'hullArmorSlot',
			'quartermasterSlot',
			'cannonSlot',
			'siegeWeaponSlot',
			'sailMaterialSlot',
			'shipCrewSlot',
			'ramSlot',
			'deckhandSlot'
		],
		shipStats: [
			'durability',
			'magicStorage',
			'ramDefense',
			'ramStrength',
			'resilience',
			'speed',
			'stability',
			'turning'
		],
		cannon: [
			'durability',
			'magicStorage',
			'ramDefense',
			'ramStrength',
			'resilience',
			'speed',
			'stability',
			'turning',

			'damageMultiplier',
			'rangeMultiplier',
			'fuseLength',
			'reloadTime'
		],
		ram: [
			'durability',
			'magicStorage',
			'ramDefense',
			'ramStrength',
			'resilience',
			'speed',
			'stability',
			'turning',
			'ramSpeed'
		],
		siegeWeapon: [
			'durability',
			'magicStorage',
			'ramDefense',
			'ramStrength',
			'resilience',
			'speed',
			'stability',
			'turning',

			'damageMultiplier',
			'rangeMultiplier',
			'spreadMultiplier',
			'fuseLength',
			'reloadTime'
		],
		allShipStats: [
			'durability',
			'magicStorage',
			'ramDefense',
			'ramStrength',
			'resilience',
			'speed',
			'stability',
			'turning',
			'ramSpeed',

			'damageMultiplier',
			'rangeMultiplier',
			'spreadMultiplier',
			'fuseLength',
			'reloadTime'
		]
	};

	let statsTable: Table = new Table(100, roundDown(config.maxLevel, 10), true, modifiers);
	let scalingTable: ScalingTable = new ScalingTable();

	let validCategories: string[] = mainTypeStats.gearStatic;

	onMount(() => {
		statsTable.updateColumns();
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Scaling Calculator</title>
	<meta name="title" content="Scaling Calculator" />
	<meta name="description" content="Scaling Calculator for Arcane Odyssey" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://aotools.woodyloody.com/scaling" />
	<meta property="og:title" content="Scaling Calculator" />
	<meta property="og:description" content="Scaling Calculator for Arcane Odyssey" />
	<meta
		property="og:image"
		content="https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/icon.png"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://aotools.woodyloody.com/scaling" />
	<meta property="twitter:title" content="Scaling Calculator" />
	<meta property="twitter:description" content="Scaling Calculator for Arcane Odyssey" />
	<meta
		property="twitter:image"
		content="https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/icon.png"
	/>

	<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>
<section>
	<div class="flex flex-col items-center" style="display: flex;">
		<p class="mt-8 text-7xl text-white merriweather-light" style="font-family: Merriweather;">
			Scaling Calculator
		</p>
	</div>

	<div class="text-white my-1 mx-10">
		<label class="text-white" for={'minLevel'}>Min Level</label>
		<br />
		<input
			class="text-gray-900"
			id={'minLevel'}
			name={'Min Level'}
			value={statsTable.minLevel}
			min={10}
			max={statsTable.maxLevel}
			step={10}
			on:change={setMin}
		/>
		<br />

		<label class="text-white" for={'maxLevel'}>Max Level</label>
		<br />
		<input
			class="text-gray-900"
			id={'maxLevel'}
			name={'Max Level'}
			value={statsTable.maxLevel}
			min={statsTable.minLevel}
			max={roundDown(config.maxLevel, 10)}
			step={10}
			on:change={setMax}
		/>

		<h6 class="mb-1 mt-3 text-md font-bold text-white">Stat Options</h6>
		<div class="flex flex-wrap items-center">
			{#each validCategories as key}
				<div class="px-2">
					<input
						id={key}
						type="checkbox"
						bind:checked={statsTable.visiBools[key].bool}
						on:input={() => {
							statsTable.updateColumns();
						}}
					/>
					<label class="text-white" for={key}>{statsTable.visiBools[key].text}</label>
				</div>
			{/each}
		</div>

		<!--

						Scaling Table

						-->

		{#if ['Accessory', 'Chestplate', 'Pants'].includes(item.mainType || '')}
			<div class="grid grid-cols-6 md:grid-cols-12 mt-3">
				<div class="col-span-1">
					<div class="w-full mb-1 font-bold">Scaling</div>

					{#each Object.keys(scalingTable.visiBools) as stat}
						{#if statsTable.visiBools[stat].bool === true}
							<div class="w-full pb-1 h-6 items-center">
								<img
									class="object-contain h-6"
									alt={scalingTable.visiBools[stat].text}
									src={scalingTable.visiBools[stat].imageId}
								/>
							</div>
						{/if}
					{/each}
				</div>
				<div class="col-span-1">
					<div class="w-full mb-1 font-bold">-</div>
					{#each Object.keys(scalingTable.column) as key}
						{#if key != 'parentTable'}
							{#if statsTable.visiBools[key].bool === true}
								<input
									type="number"
									step="any"
									class="w-full h-6 max-w-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-1"
									bind:value={scalingTable.column[key]}
									placeholder={'0'}
								/>
							{/if}
						{/if}
					{/each}
				</div>
			</div>
			{#if statsTable.visiBools['insanity'].bool || statsTable.visiBools['drawback'].bool || statsTable.visiBools['warding'].bool}
				<h6 class="text-sm font-bold text-white">
					Insanity, Drawback and Warding scaling will be treated as flat values.
				</h6>
			{/if}
		{/if}

		<!--

						Table

					-->

		<div class="grid grid-cols-6 md:grid-cols-12">
			<div class="col-span-1">
				{#if statsTable.levelVisibility}
					<div class="w-full mb-1 font-bold">Level</div>
				{:else}
					<div class="w-full mb-1 font-bold">Stats</div>
				{/if}

				{#each Object.keys(statsTable.visiBools) as stat}
					{#if statsTable.visiBools[stat].bool === true}
						<div
							class="w-full pb-1 h-6 items-center text-ellipsis overflow-hidden whitespace-nowrap"
						>
							{#if statsTable.visiBools[stat].imageId != ''}
								<img
									class="object-contain h-6"
									alt={statsTable.visiBools[stat].text}
									src={statsTable.visiBools[stat].imageId}
								/>
							{:else}
								{statsTable.visiBools[stat].text}
							{/if}
						</div>
					{/if}
				{/each}
			</div>
			{#each statsTable.columns as column}
				<div class="col-span-1">
					{#each Object.keys(column) as key}
						{#if key != 'parentTable'}
							{#if key === 'level'}
								{#if statsTable.levelVisibility}
									<div class="w-full mb-1 font-bold">{column.level}</div>
								{:else}
									<div class="w-full mb-1 font-bold">-</div>
								{/if}
							{:else if key !== 'level ' && statsTable.visiBools[key].bool === true}
								<input
									type="number"
									step="any"
									class="w-full h-6 max-w-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-1"
									value={calculateStatScaling(
										{ ...item, scaling: scalingTable.column },
										key,
										column.level,
										config,
										findImbue(item, config)
									).toString()}
									disabled
								/>
							{/if}
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
