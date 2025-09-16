<script lang="ts">
	import BuildLoadButton from '$lib/components/builders/BuildLoadButton.svelte';
	import BuildSaveButton from '$lib/components/builders/BuildSaveButton.svelte';
	import BuildsOverrideButton from '$lib/components/builders/BuildsOverrideButton.svelte';
	import GearButton from '$lib/components/builders/GearButton.svelte';
	import ItemTooltip from '$lib/components/builders/ItemTooltip.svelte';
	import RandomButton from '$lib/components/builders/RandomButton.svelte';
	import ShipSelectButton from '$lib/components/builders/ShipSelectButton.svelte';
	import BlackButton from '$lib/components/misc/BlackButton.svelte';
	import { CurrentShipBuild } from '$lib/shipBuilder/ShipClass.js';
	import {
		currentShipBuildCode,
		getBuildFromLocalStorage,
		storeBuildToLocalStorage
	} from '$lib/utils/buildSavingUtils.js';
	import type { MainShip } from '$lib/utils/itemTypes';
	import { onMount } from 'svelte';
	import { get, writable } from 'svelte/store';

	export let data;

	let ready = false;

	let SessionShip = new CurrentShipBuild(data.database);

	let ships = data.database.filter((item) => item.mainType == 'Ship');
	console.log(data.database);

	let ShipName = SessionShip.ship.name;

	function handleShipChange() {
		console.log(ships);
		const shipToPick = ships.find((ship) => ship.name === ShipName) as MainShip;

		SessionShip.setShip(shipToPick);
		updatePage();
	}

	const keyStore = writable(false);

	function loadHash() {
		if (window.location.hash.substring(1) !== '') {
			SessionShip.loadBuildCode(data.database, window.location.hash.substring(1));
			history.replaceState({}, document.title, window.location.href.split('#')[0]);
		}
	}

	function updatePage() {
		currentShipBuildCode.set(SessionShip.getBuildCode());

		storeBuildToLocalStorage(get(currentShipBuildCode), 'shipBuild');
		ShipName = SessionShip.ship.name;
		keyStore.update((value: boolean) => !value);
	}

	onMount(() => {
		SessionShip.loadBuildCode(data.database, getBuildFromLocalStorage('shipBuild'));
		loadHash();
		updatePage();
		ready = true;
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Ship Builder</title>
	<meta name="title" content="Ship Builder" />
	<meta name="description" content="Ship Builder for Arcane Odyssey" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://aotools.woodyloody.com/shipBuilder" />
	<meta property="og:title" content="Ship Builder" />
	<meta property="og:description" content="Ship Builder for Arcane Odyssey" />
	<meta property="og:image" content="https://i.imgur.com/c6n3LP1.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://aotools.woodyloody.com/shipBuilder" />
	<meta property="twitter:title" content="Ship Builder" />
	<meta property="twitter:description" content="Ship Builder for Arcane Odyssey" />
	<meta property="twitter:image" content="https://i.imgur.com/c6n3LP1.png" />

	<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>

{#if ready}
	{#key $keyStore}
		<div class="flex flex-col items-center justify-center mb-20 mt-10 xl:mb-0">
			<div class="flex flex-col xl:flex-row space-x-0 xl:space-x-2 space-y-2 xl:space-y-0 my-1">
				<BlackButton
					parentFunction={async () => {
						let code = SessionShip.getBuildCode();
						await navigator.clipboard.writeText(code);
					}}
					parentText={'Get Build Code'}
				></BlackButton>
				<BlackButton
					parentFunction={async () => {
						let inputString = await navigator.clipboard.readText();
						SessionShip.loadBuildCode(data.database, inputString);
						updatePage();
					}}
					parentText={'Load Build Code'}
				></BlackButton>
				<BlackButton
					parentFunction={async () => {
						let code =
							location.origin +
							location.pathname +
							(location.search ? location.search : '') +
							'#' +
							SessionShip.getBuildCode();

						// copy text to clipboard
						await navigator.clipboard.writeText(code);
					}}
					parentText={'Share Build Code'}
				></BlackButton>
			</div>
			<div class="flex flex-col xl:flex-row space-x-0 xl:space-x-2 space-y-2 xl:space-y-0 my-1">
				<BuildSaveButton type={'ship'}></BuildSaveButton>
				<BuildLoadButton
					database={data.database}
					type={'ship'}
					parentPlayer={SessionShip}
					updatePage={() => updatePage()}
				></BuildLoadButton>
				<BuildsOverrideButton type={'ship'}></BuildsOverrideButton>
			</div>
			<div class="flex flex-col xl:flex-row space-x-0 xl:space-x-2 space-y-2 xl:space-y-0 my-1">
				<RandomButton player={SessionShip} database={data.database} {updatePage} type={'ship'}
				></RandomButton>
				<BlackButton
					parentFunction={() => {
						SessionShip.resetBuild();
						updatePage();
					}}
					parentText={'Reset Build'}
				></BlackButton>
			</div>

			<select
				class="text-white bg-black border-white border-2 p-2 text-xl rounded-md mt-1"
				style="font-family: Merriweather;"
				bind:value={ShipName}
				on:change={() => handleShipChange()}
			>
				{#each ships.sort(function (first, second) {
					return second.durability - first.durability;
				}) as ship}
					<option>{ship.name}</option>
				{/each}
			</select>

			<div class="flex flex-col xl:flex-row mt-5">
				<div class="flex flex-col me-5">
					{#each ['hullArmorSlot', 'sailMaterialSlot', 'ramSlot', 'cannonSlot', 'siegeWeaponSlot'] as slotKey}
						<div class="flex flex-row justify-center">
							{#each SessionShip.slots[slotKey] as ShipPartSlot, i}
								{#if ShipPartSlot.base != null}
									<GearButton
										currentItem={ShipPartSlot.base}
										database={data.database}
										ship={SessionShip}
										{slotKey}
										slotIndex={i}
										shipPartType={'base'}
										updatePage={() => {
											updatePage();
										}}
									/>
								{/if}
								{#if ShipPartSlot.enchant && ShipPartSlot.enchant != null}
									<GearButton
										currentItem={ShipPartSlot.enchant}
										database={data.database}
										ship={SessionShip}
										{slotKey}
										slotIndex={i}
										shipPartType={'enchant'}
										updatePage={() => {
											updatePage();
										}}
									/>
								{/if}
							{/each}
						</div>
					{/each}
				</div>
				<div class="flex flex-col xl:w-[28rem] my-5 xl:my-0">
					{#each ['shipCrewSlot', 'quartermasterSlot', 'deckhandSlot'] as slotKey}
						<div class="flex flex-row flex-wrap w-screen justify-center mx-auto xl:w-auto xl:ml-0">
							{#each SessionShip.slots[slotKey] as ShipPartSlot, i}
								{#if ShipPartSlot.base != null}
									<GearButton
										currentItem={ShipPartSlot.base}
										database={data.database}
										ship={SessionShip}
										{slotKey}
										slotIndex={i}
										shipPartType={'base'}
										updatePage={() => {
											updatePage();
										}}
									/>
								{/if}
								{#if ShipPartSlot.enchant && ShipPartSlot.enchant != null}
									<GearButton
										currentItem={ShipPartSlot.enchant}
										database={data.database}
										ship={SessionShip}
										{slotKey}
										slotIndex={i}
										shipPartType={'enchant'}
										updatePage={() => {
											updatePage();
										}}
									/>
								{/if}
							{/each}
						</div>
					{/each}
				</div>
				<div class="justify-center mx-auto order-first xl:order-none">
					<div
						class="mx-auto xl:ms-20 xl:me-5 w-80 h-auto p-2 border-2 border-white rounded bg-black bg-opacity-40"
					>
						<div class="flex items-center justify-center mb-3 pb-3 w-[80%] mx-auto border-b-2">
							<p
								style="font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: white; text-align: center;"
							>
								Ship Stats
							</p>
						</div>
						<ItemTooltip
							fullItem={SessionShip.getShipBuildStats()}
							ship={SessionShip}
							showName={true}
							atlanteanAttribute={''}
							showOnlyAtlanteanStat={false}
							isItemMenu={false}
							statsShown={'stats'}
						></ItemTooltip>
					</div>
				</div>
				<div class="justify-center mx-auto order-first xl:order-none my-5 xl:my-0">
					<div class="w-80 h-auto p-2 border-2 border-white rounded bg-black bg-opacity-40">
						<div class="flex items-center justify-center mb-3 pb-3 w-[80%] mx-auto border-b-2">
							<p
								style="font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: white; text-align: center;"
							>
								Weapon Stats
							</p>
						</div>
						{#if SessionShip.slots['cannonSlot']
							.concat(SessionShip.slots['siegeWeaponSlot'])
							.filter((item) => item.base.name != 'None').length == 0}
							<div class="flex items-center justify-center">
								<p
									style="font-family: 'Open Sans', sans-serif; font-weight: 500; font-size: 15px; -webkit-text-fill-color: white; text-align: center;"
								>
									No Weapons Equipped
								</p>
							</div>
						{:else}
							{#each SessionShip.slots['cannonSlot'].concat(SessionShip.slots['siegeWeaponSlot']) as cannon}
								{#if cannon.base.name != 'None'}
									<div class="flex items-center justify-center mt-3">
										<p
											style="font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px; -webkit-text-fill-color: white; text-align: center;"
										>
											{cannon.base.name}
										</p>
									</div>
									<ItemTooltip
										fullItem={cannon.getSlotStats()}
										ship={SessionShip}
										showName={true}
										atlanteanAttribute={''}
										showOnlyAtlanteanStat={false}
										isItemMenu={false}
										statsShown={'weapon'}
									></ItemTooltip>
								{/if}
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/key}
{/if}
