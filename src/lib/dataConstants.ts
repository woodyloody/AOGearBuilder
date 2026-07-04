import type { Rarities } from './utils/itemTypes';
import type { magic } from './gearBuilder/playerTypes';

export const staticImagesRootFolder: string =
	'https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main';

export const rarityColors: { [key in Rarities]: string } = {
	None: '#FFFFFF',
	Common: '#7D7D7F',
	Uncommon: '#817346',
	Rare: '#6765EC',
	Exotic: '#FF0000',
	Seasonal: '#C001C2',
	Legendary: '#00FF00'
};

export type validStatKeysType =
	| 'power'
	| 'defense'
	| 'agility'
	| 'attackSpeed'
	| 'attackSize'
	| 'intensity'
	| 'regeneration'
	| 'piercing'
	| 'resistance'
	| 'insanity'
	| 'warding'
	| 'drawback'
	| 'durability'
	| 'magicStorage'
	| 'ramDefense'
	| 'ramStrength'
	| 'resilience'
	| 'speed'
	| 'stability'
	| 'turning'
	| 'powerIncrement'
	| 'defenseIncrement'
	| 'agilityIncrement'
	| 'attackSpeedIncrement'
	| 'attackSizeIncrement'
	| 'intensityIncrement'
	| 'regenerationIncrement'
	| 'piercingIncrement'
	| 'resistanceIncrement'
	| 'damageMultiplier'
	| 'rangeMultiplier'
	| 'spreadMultiplier'
	| 'fuseLength'
	| 'reloadTime'
	| 'ramSpeed'
	| 'hullArmorSlot'
	| 'quartermasterSlot'
	| 'cannonSlot'
	| 'siegeWeaponSlot'
	| 'sailMaterialSlot'
	| 'shipCrewSlot'
	| 'ramSlot'
	| 'deckhandSlot';

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

export const listOfMagics: magic[] = [
	'Acid',
	'Ash',
	'Crystal',
	'Earth',
	'Explosion',
	'Fire',
	'Glass',
	'Ice',
	'Light',
	'Lightning',
	'Magma',
	'Metal',
	'Plasma',
	'Poison',
	'Sand',
	'Shadow',
	'Snow',
	'Water',
	'Wind',
	'Wood'
];

export const imbuedStatRelations: any = {
	power: 'powerIncrement',
	defense: 'defenseIncrement',
	agility: 'agilityIncrement',
	attackSpeed: 'attackSpeedIncrement',
	attackSize: 'attackSizeIncrement',
	intensity: 'intensityIncrement',
	regeneration: 'regenerationIncrement',
	piercing: 'piercingIncrement',
	resistance: 'resistanceIncrement'
};

export const newStatNames: Record<string, string> = {
	agility: 'range',
	attackSpeed: 'dexterity',
	attackSize: 'size',
	intensity: 'haste',
	piercing: 'pierce'
};

export const dragonbloodBlessings: Record<number, number> = {
	0: 0,
	1: 0.02,
	2: 0.04,
	3: 0.08,
	4: 0.12,
	5: 0.16,
	6: 0.18,
	7: 0.2
};
