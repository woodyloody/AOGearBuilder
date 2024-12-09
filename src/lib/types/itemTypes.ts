export type Rarities =
	| 'None'
	| 'Common'
	| 'Uncommon'
	| 'Rare'
	| 'Exotic'
	| 'Seasonal'
	| 'Legendary';

export type MainTypes =
	| 'Accessory'
	| 'Chestplate'
	| 'Pants'
	| 'Gem'
	| 'Modifier'
	| 'Enchant'
	| 'Cannon'
	| 'Hull Armor'
	| 'Deckhand'
	| 'Ram'
	| 'Sail Material'
	| 'Siege Weapon'
	| 'Boat'
	| 'Ship Crew'
	| 'Quartermaster'
	| 'Ship';

export type StatTypes = 'None' | 'Magic' | 'Strength' | 'Vitality';

export type ItemIdentifiers = {
	[index: string]: any;
	id: string;
	name: string;
	legend: string;
	mainType: MainTypes;
	rarity: Rarities;
	imageId: string;
} & Partial<{ deleted: boolean; subType: string; statType: StatTypes }>;

export type GearStats = Partial<{
	power: number;
	defense: number;
	agility: number;
	attackSpeed: number;
	attackSize: number;
	intensity: number;

	regeneration: number;
	piercing: number;
	resistance: number;

	insanity: number;
	warding: number;
	drawback: number;
}>;

export type ShipStats = Partial<{
	durability: number;
	magicStorage: number;
	ramDefense: number;
	ramStrength: number;
	resilience: number;
	speed: number;
	stability: number;
	turning: number;
}>;

export type GearEnchantStats = Partial<{
	powerIncrement: number;
	defenseIncrement: number;
	agilityIncrement: number;
	attackSpeedIncrement: number;
	attackSizeIncrement: number;
	intensityIncrement: number;

	regenerationIncrement: number;
	piercingIncrement: number;
	resistanceIncrement: number;

	insanity: number;
	warding: number;
	drawback: number;
}>;
