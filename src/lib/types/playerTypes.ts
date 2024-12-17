export type Magic =
	| 'Acid'
	| 'Ash'
	| 'Crystal'
	| 'Earth'
	| 'Explosion'
	| 'Fire'
	| 'Glass'
	| 'Ice'
	| 'Light'
	| 'Lightning'
	| 'Magma'
	| 'Metal'
	| 'Plasma'
	| 'Poison'
	| 'Sand'
	| 'Shadow'
	| 'Snow'
	| 'Water'
	| 'Wind'
	| 'Wood';

export type FightingStyle =
	| 'Basic Combat'
	| 'Boxing'
	| 'Iron Leg'
	| 'Cannon Fist'
	| 'Sailor Style'
	| 'Thermo Fist';

export type StatBuildStats = { name: string; magicNo: number; fightingStyleNo: number };
