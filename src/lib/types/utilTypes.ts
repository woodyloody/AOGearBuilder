import type { GearEnchantStats, GearStats, ShipStats } from './itemTypes';

export type AOTConfig = {
	maxLevel: number;
	modifiers: Record<string, string[]>;
};

export type validStatKeysType = keyof GearStats | keyof ShipStats | keyof GearEnchantStats;

export const validStatKeys: validStatKeysType[] = [
	'power',
	'defense',
	'agility',
	'attackSpeed',
	'attackSize',
	'intensity',
	'regeneration',
	'piercing',
	'resistance',

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
	'drawback',

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
	'reloadTime',

	'ramSpeed',

	'hullArmorSlot',
	'quartermasterSlot',
	'cannonSlot',
	'siegeWeaponSlot',
	'sailMaterialSlot',
	'shipCrewSlot',
	'ramSlot',
	'deckhandSlot'
];
