export type magic =
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

export type fightingStyle =
	| 'Basic Combat'
	| 'Boxing'
	| 'Iron Leg'
	| 'Cannon Fist'
	| 'Powder Fist'
	| 'Sailor Style'
	| 'Thermo Fist'
	| 'Vanishing Style';

export type statBuildStats = { name: string; magicNo: number; fightingStyleNo: number };
