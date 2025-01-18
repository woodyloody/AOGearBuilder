export type StatBuildDetails = {
	name: string;
	color: string;
	magicNo: number;
	fightingStyleNo: number;
};

type StatBuildNames =
	| 'None'
	| 'Warden'
	| 'Berserker'
	| 'Warrior'
	| 'Mage'
	| 'Juggernaut'
	| 'Knight'
	| 'Paladin'
	| 'Warlord'
	| 'Warlock'
	| 'Conjurer'
	| 'Savant';

type StatBuilds = Record<StatBuildNames, StatBuildDetails>;

export const statBuilds: StatBuilds = {
	None: {
		name: 'None',
		color: '#FFFFFF', // Default color for None
		magicNo: 1,
		fightingStyleNo: 0
	},
	Warden: {
		name: 'Warden',
		color: '#00FC00',
		magicNo: 0,
		fightingStyleNo: 0
	},
	Berserker: {
		name: 'Berserker',
		color: '#FF6060',
		magicNo: 0,
		fightingStyleNo: 2
	},
	Warrior: {
		name: 'Warrior',
		color: '#F7F75E',
		magicNo: 0,
		fightingStyleNo: 0
	},
	Mage: {
		name: 'Mage',
		color: '#02B1EB',
		magicNo: 2,
		fightingStyleNo: 0
	},
	Juggernaut: {
		name: 'Juggernaut',
		color: '#A87643',
		magicNo: 0,
		fightingStyleNo: 2
	},
	Knight: {
		name: 'Knight',
		color: '#92D353',
		magicNo: 0,
		fightingStyleNo: 0
	},
	Paladin: {
		name: 'Paladin',
		color: '#20D8AC',
		magicNo: 2,
		fightingStyleNo: 0
	},
	Warlord: {
		name: 'Warlord',
		color: '#EBA15A',
		magicNo: 0,
		fightingStyleNo: 1
	},
	Warlock: {
		name: 'Warlock',
		color: '#FF90AF',
		magicNo: 1,
		fightingStyleNo: 1
	},
	Conjurer: {
		name: 'Conjurer',
		color: '#7DDCAD',
		magicNo: 1,
		fightingStyleNo: 0
	},
	Savant: {
		name: 'Savant',
		color: '#F9DBF8',
		magicNo: 1,
		fightingStyleNo: 1
	}
};
