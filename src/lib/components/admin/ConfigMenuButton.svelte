<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import SubmitButton from './inputs/SubmitButton.svelte';
	import toast from 'svelte-french-toast';
	import NumberInput from './inputs/NumberInput.svelte';
	import { capitalizeEachWord } from '$lib/utils/admin/stringUtils';
	import { evaluateStat } from '$lib/utils/calculateSubstatEfficiency';

	export let data: any;

	let open = false;

	let finalSubmitData: string = '';

	let title = 'Config';

	let imbueType = 'acid';

	let efficienciesCategory = 'values';
	let efficienciesVaribles: Record<string, string> = {
		formulas:
			'The valid variables that can be referenced are multiplier (the multiplier set in the values), statAmount (the number of each stat the build has) and playerLevel (the players level)',
		values:
			'The valid variables that can be referenced are any variable named here. E.g. baseline*2 will equal the number in baseline multiplied by 2'
	};

	function createValues() {
		let values: Record<string, string> = {};
		for (let [key, value] of Object.entries(
			data.config.efficiencies.values as Record<string, Record<string, string>>
		)) {
			values[key] = value.value;
		}
		return values;
	}

	function checkValue(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		let statResult: number = NaN;
		try {
			statResult = evaluateStat(e.currentTarget.id, createValues());
		} catch (error) {
			e.currentTarget.setCustomValidity(
				'Invalid variables. Please check the variables are spelt correctly.'
			);
			e.currentTarget.reportValidity();
			return true;
		}

		if (Number.isNaN(statResult)) {
			e.currentTarget.setCustomValidity('Invalid Input. Variables must not create a loop.');
			e.currentTarget.reportValidity();
			return true;
		}

		e.currentTarget.setCustomValidity('');
		return true;
	}

	$: title = 'Config';
	const handleToggle = () => {
		open = !open;
	};

	function generateEntry() {
		finalSubmitData = JSON.stringify(data.config);
	}

	onMount(() => {});
</script>

<button
	class="font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
	on:click={() => handleToggle()}>Config</button
>

{#if open}
	<div
		class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0 overflow-x-hidden overflow-y-auto"
	>
		<div class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50" />
		<div
			class="bg-white flex flex-col w-full lg:h-max lg:w-5/6 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto max-h-full"
		>
			<form
				method="POST"
				action="?/updateConfig"
				on:submit={generateEntry}
				use:enhance={() => {
					return async ({ result, update }) => {
						update({ reset: false });

						if (result.type === 'success') {
							handleToggle();
							toast.success('Successfully updated the config!');
						}

						if (result.type === 'failure') {
							if (result['data'] !== undefined && result['data']['error'] !== undefined) {
								toast.error('Error: ' + result['data']['error']);
							} else {
								toast.error('Error: Unknown');
							}
						}
					};
				}}
			>
				<div
					class="flex flex-shrink-0 justify-between items-center head bg-gray-100 py-5 px-8 text-2xl font-extrabold overflow-hidden"
				>
					{title}
					<button
						class="p-2 bg-gray-200 hover:bg-gray-300 rounded-full ml-4"
						on:click={() => handleToggle()}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 0 24 24"
							width="24px"
							fill="#000000"
						>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path
								d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
							/>
						</svg>
					</button>
				</div>

				<div class="content p-8 pt-2 overflow-y-auto">
					<input type="hidden" id="config" name="config" value={finalSubmitData} required />

					<h6 class="mb-1 text-lg font-bold text-gray-900">General Config</h6>
					<div class="grid gap-6 mb-6 md:grid-cols-4">
						<NumberInput
							id={'maxLevel'}
							name={'Max Level'}
							placeholder={data.config.maxLevel}
							isRequired={true}
							bind:value={data.config.maxLevel}
						/>
					</div>

					<h6 class="mb-1 text-lg font-bold text-gray-900">Imbue Config</h6>
					<div class="mb-6">
						<div>
							<label for={'imbueType'} class="block mb-2 text-sm font-medium text-gray-900"
								>Imbue Type</label
							>
							<select
								bind:value={imbueType}
								id={'imbueType'}
								name={'imbueType'}
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							>
								{#each Object.keys(data.config.scaling.imbuedStatType) as option}
									<option value={option}>{capitalizeEachWord(option)}</option>
								{/each}
							</select>
						</div>
					</div>
					{#if imbueType in data.config.scaling.imbuedStatType}
						<div class="grid gap-6 mb-6 md:grid-cols-4">
							{#each Object.keys(data.config.scaling.imbuedStatType[imbueType]) as key}
								<div>
									<label for={key} class="block mb-2 text-sm font-medium text-gray-900"
										>{capitalizeEachWord(key)}</label
									>
									<input
										bind:value={data.config.scaling.imbuedStatType[imbueType][key]}
										type="number"
										id={key}
										name={key}
										placeholder={data.config.scaling.imbuedStatType[imbueType][key].toString()}
										step="any"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									/>
								</div>
							{/each}
						</div>
					{/if}

					<h6 class="mb-1 text-lg font-bold text-gray-900">Efficiencies Config</h6>
					<div class="mb-6">
						<div>
							<label
								for={'efficienciesCategory'}
								class="block mb-2 text-sm font-medium text-gray-900">Category</label
							>
							<select
								bind:value={efficienciesCategory}
								id={'efficienciesCategory'}
								name={'efficienciesCategory'}
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							>
								{#each Object.keys(data.config.efficiencies) as option}
									<option value={option}>{capitalizeEachWord(option)}</option>
								{/each}
							</select>
						</div>
					</div>
					<div class="mb-6">
						<h6 class="text-sm mb-2">
							{efficienciesVaribles[efficienciesCategory]}
						</h6>
						<div class="grid gap-6 md:grid-cols-{efficienciesCategory == 'values' ? '4' : '1'}">
							{#each Object.keys(data.config.efficiencies[efficienciesCategory]) as key}
								<div>
									<label for={key} class="block mb-2 text-sm font-medium text-gray-900">{key}</label
									>
									<input
										on:focusin={checkValue}
										on:change={checkValue}
										bind:value={data.config.efficiencies[efficienciesCategory][key].value}
										type="text"
										id={key}
										name={key}
										placeholder={data.config.efficiencies[efficienciesCategory][
											key
										].value.toString()}
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										required
									/>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<SubmitButton text={'Update'} />
			</form>
		</div>
	</div>
{/if}
