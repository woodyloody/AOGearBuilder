import type { GearEnchantStats, GearStats, ShipStats } from './itemTypes';

export type AOTConfig = {
	maxLevel: number;
	modifiers: Record<string, string[]>;
	epValues: {
		power: number;
		defense: number;
		substat: number;
		drawback: number;
		warding: number;
		insanity: number;
	};
	scalings: {
		epPer10: {
			power: number;
			defense: number;
			substat: number;
		};
	};
};

export const tempConfig: AOTConfig = {
	maxLevel: 140,
	modifiers: {},
	epValues: {
		power: 3,
		defense: 1 / 3,
		substat: 1,
		drawback: 0,
		warding: 0,
		insanity: 0
	},
	scalings: {
		epPer10: {
			power: 10.5,
			defense: 9,
			substat: 5
		}
	}
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
