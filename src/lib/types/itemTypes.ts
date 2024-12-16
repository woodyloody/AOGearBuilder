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

type statsPerLevel = {
	level: number;
} & GearStats;

export type ArmorDetails = ItemIdentifiers & {
	mainType: 'Accessory' | 'Chestplate' | 'Pants';
	gemNo: number;
	minLevel: number;
	maxLevel: number;
	statsPerLevel: statsPerLevel[];
	validModifiers: { id: string; name: string }[];
};

export type GemDetails = ItemIdentifiers & GearStats;

export type ShipPartDetails = ItemIdentifiers & {
	mainType:
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
} & ShipStats;

export type EnchantDetails = ItemIdentifiers & {
	mainType: 'Enchant';
	enchantTypes: Partial<{
		gear: GearEnchantStats;
		ship: Record<'ram' | 'hull' | 'sail', ShipStats>;
	}>;
};

export type ModifierDetails = ItemIdentifiers &
	GearEnchantStats & {
		mainType: 'Modifier';
	};

export type AnyItemDetails = Partial<
	ArmorDetails | GemDetails | ShipPartDetails | EnchantDetails | ModifierDetails
>;

export type ShipDetails = ItemIdentifiers &
	ShipStats & {
		hullArmorSlot: number;
		quartermasterSlot: number;
		cannonSlot: number;
		siegeWeaponSlot: number;
		sailMaterialSlot: number;
		shipCrewSlot: number;
		ramSlot: number;
		deckhandSlot: number;
	};
