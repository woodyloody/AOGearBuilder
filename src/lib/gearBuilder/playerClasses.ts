import { get } from 'svelte/store';
import { CurrentBuild } from './CurrentBuild';
import type { fightingStyle, magic, statBuildStats } from './playerTypes';
import { getItemById } from '../utils/getItemById';
import { dragonbloodBlessings, listOfMagics } from '../dataConstants';
import { loadOldCode } from './buildCodeHandling/legacyCode';
import { isLegacyArmorBuild } from './buildCodeHandling/legacyCode';
import { clamp } from '$lib/utils/clamp';
import { statBuilds } from '$lib/data/statBuilds';
import { magicRecords } from '$lib/data/playerMagics';
import type { anyItem } from '../utils/itemTypes';
import { fightingStyleRecords, listOfFightingStyles } from '$lib/data/playerFightingStyles';
import { isPreMagicFSBuildCode, loadPreMagicFSBuildCode } from './buildCodeHandling/preMagicFS';
import { savantChoiceStore } from './savantChoiceStore';
import { isMagicFSv1, loadMagicFSv1 } from './buildCodeHandling/magicFSv1';
import { floorDecimal } from '$lib/utils/floorDecimal';

export class Player {
	database: anyItem[] = [];

	level: number;
	health: number;

	magics: magic[];
	fightingStyles: fightingStyle[];

	build: CurrentBuild;

	minLevel: number;
	maxLevel: number;

	statBuild: statBuildStats;

	vitalityPoints: number;
	magicPoints: number;
	strengthPoints: number;
	weaponPoints: number;

	blessing: number;

	constructor(
		database: anyItem[],
		maxLevel: number,
		level = maxLevel,
		health = 91,

		vitalityPoints = 0,
		magicPoints = 0,
		strengthPoints = 0,
		weaponPoints = 0,

		statBuild: statBuildStats = statBuilds['None'],

		magics: magic[] = ['Acid'],
		fightingStyles: fightingStyle[] = ['Basic Combat']
	) {
		this.database = database;
		this.level = level;
		this.health = health + this.level * 9;

		this.minLevel = 1;
		this.maxLevel = maxLevel;

		this.build = new CurrentBuild(this);

		this.vitalityPoints = vitalityPoints;
		this.magicPoints = magicPoints;
		this.strengthPoints = strengthPoints;
		this.weaponPoints = weaponPoints;

		this.statBuild = statBuild;

		this.magics = magics;
		this.fightingStyles = fightingStyles;

		this.blessing = 0;
	}

	fixLevel() {
		if (this.level > this.maxLevel) {
			this.level = this.maxLevel;
		}
	}

	fixPlayerStatPoints() {
		// Statpoint Balancing
		const maxStatPoints = this.level * 2;

		while (
			this.vitalityPoints + this.magicPoints + this.strengthPoints + this.weaponPoints >
			maxStatPoints
		) {
			let currentPlayerStatPoints = {
				vitalityPoints: this.vitalityPoints,
				magicPoints: this.magicPoints,
				strengthPoints: this.strengthPoints,
				weaponPoints: this.weaponPoints
			};
			let highestStat = Math.max(
				this.vitalityPoints,
				this.magicPoints,
				this.strengthPoints,
				this.weaponPoints
			);
			for (let stat in currentPlayerStatPoints) {
				if (currentPlayerStatPoints[stat as keyof typeof currentPlayerStatPoints] === highestStat) {
					currentPlayerStatPoints[stat as keyof typeof currentPlayerStatPoints] -= 1;
				}
			}
			this.vitalityPoints = currentPlayerStatPoints.vitalityPoints;
			this.magicPoints = currentPlayerStatPoints.magicPoints;
			this.strengthPoints = currentPlayerStatPoints.strengthPoints;
			this.weaponPoints = currentPlayerStatPoints.weaponPoints;
		}
	}

	setMagic(magic: magic, index: number) {
		try {
			this.magics[index] = magic;
			this.build.fixBuildItems();
		} catch (e) {
			console.log(e, 'ERMM MAGIC IS NOT SETTING SIR');
		}
	}

	setFightingStyle(fightingStyle: fightingStyle, index: number) {
		try {
			this.fightingStyles[index] = fightingStyle;
			this.build.fixBuildItems();
		} catch (e) {
			console.log(e, 'ERMM FIGHTING STYLE IS NOT SETTING SIR');
		}
	}

	updateHealth() {
		const baseHealth = 91 + this.level * 9;
		this.health = baseHealth + floorDecimal(this.build.getBuildStats().defense, 1);
		if (this.blessing) {
			this.health += baseHealth * floorDecimal(dragonbloodBlessings[this.blessing], 2);
		}
	}

	updateStatBuild() {
		this.statBuild = statBuilds[this.getStatBuild().type];
		let magicNo = this.statBuild.magicNo;
		let fightingStyleNo = this.statBuild.fightingStyleNo;

		if (this.getStatBuild().type === 'Savant') {
			if (get(savantChoiceStore).includes('Magic')) {
				magicNo += 1;
			} else if (get(savantChoiceStore).includes('Fighting Style')) {
				fightingStyleNo += 1;
			}
		}

		if (this.magics.length < magicNo) {
			const diff = magicNo - this.magics.length;
			for (let i = 0; i < diff; i++) {
				const otherMagics = Object.keys(magicRecords).filter(
					(magic) => !this.magics.includes(magic as magic)
				) as magic[];
				this.magics.push(otherMagics[0]);
			}
		}

		if (this.fightingStyles.length < fightingStyleNo) {
			const diff = fightingStyleNo - this.fightingStyles.length;
			for (let i = 0; i < diff; i++) {
				const otherFightingStyles = Object.keys(fightingStyleRecords).filter(
					(fightingStyle) => !this.fightingStyles.includes(fightingStyle as fightingStyle)
				);
				this.fightingStyles.push(otherFightingStyles[0] as fightingStyle);
			}
		}

		this.magics.splice(magicNo);
		this.fightingStyles.splice(fightingStyleNo);

		this.build.fixBuildItems();
	}

	changeStatPoint(
		stat: 'vitalityPoints' | 'magicPoints' | 'strengthPoints' | 'weaponPoints',
		amount: number
	) {
		const maxStatPoints = this.level * 2;
		const currentTotalStats =
			this.magicPoints + this.vitalityPoints + this.strengthPoints + this.weaponPoints;

		let amountToChange = 0;
		if (currentTotalStats + amount > maxStatPoints) {
			amountToChange = maxStatPoints - currentTotalStats;
		} else {
			amountToChange = amount;
		}
		console.log(amountToChange);

		if (stat === 'vitalityPoints') {
			this.vitalityPoints = clamp(this.vitalityPoints + amountToChange, 0, maxStatPoints);
		} else if (stat === 'magicPoints') {
			this.magicPoints = clamp(this.magicPoints + amountToChange, 0, maxStatPoints);
		} else if (stat === 'strengthPoints') {
			this.strengthPoints = clamp(this.strengthPoints + amountToChange, 0, maxStatPoints);
		} else if (stat === 'weaponPoints') {
			this.weaponPoints = clamp(this.weaponPoints + amountToChange, 0, maxStatPoints);
		}

		this.updateStatBuild();
	}

	changePlayerLevel(amount: number) {
		this.level = clamp(this.level + amount, this.minLevel, this.maxLevel);
		this.fixPlayerStatPoints();
	}
	resetStatPoints() {
		this.vitalityPoints = 0;
		this.magicPoints = 0;
		this.strengthPoints = 0;
		this.weaponPoints = 0;

		this.updateStatBuild();
	}

	getStatBuild(): { type: string; color: string } {
		const totalStats: number =
			this.vitalityPoints + this.magicPoints + this.strengthPoints + this.weaponPoints;
		const percentages: Record<'vitality' | 'magic' | 'strength' | 'weapons', number> = {
			vitality: this.vitalityPoints / totalStats,
			magic: this.magicPoints / totalStats,
			strength: this.strengthPoints / totalStats,
			weapons: this.weaponPoints / totalStats
		};

		const stats = Object.values(percentages);

		const isSavant =
			stats.filter((value) => value >= 0.15).length >= 3 ||
			(!stats.some((value) => value >= 0.6) &&
				!(stats.filter((value) => value >= 0.4).length >= 2) &&
				stats.filter((value) => value > 0).length > 0);

		const buildTypes: {
			type: string;
			color: string;
			conditions: Array<
				(percentages: Record<'vitality' | 'magic' | 'strength' | 'weapons', number>) => boolean
			>;
		}[] = [
			{
				type: 'Oracle',
				color: '#00FC00',
				conditions: [({ vitality }) => vitality > 0.6 || (isSavant && vitality >= 0.5)]
			},
			{
				type: 'Berserker',
				color: '#FF6060',
				conditions: [({ strength }) => strength > 0.6 || (isSavant && strength >= 0.5)]
			},
			{
				type: 'Warrior',
				color: '#F7F75E',
				conditions: [({ weapons }) => weapons > 0.6 || (isSavant && weapons >= 0.5)]
			},
			{
				type: 'Mage',
				color: '#02B1EB',
				conditions: [({ magic }) => magic > 0.6 || (isSavant && magic >= 0.5)]
			},
			{
				type: 'Juggernaut',
				color: '#A87643',
				conditions: [({ vitality, strength }) => vitality >= 0.4 && strength >= 0.4]
			},
			{
				type: 'Knight',
				color: '#92D353',
				conditions: [({ vitality, weapons }) => vitality >= 0.4 && weapons >= 0.4]
			},
			{
				type: 'Paladin',
				color: '#20D8AC',
				conditions: [({ vitality, magic }) => vitality >= 0.4 && magic >= 0.4]
			},
			{
				type: 'Warlord',
				color: '#EBA15A',
				conditions: [({ strength, weapons }) => strength >= 0.4 && weapons >= 0.4]
			},
			{
				type: 'Warlock',
				color: '#FF90AF',
				conditions: [({ strength, magic }) => strength >= 0.4 && magic >= 0.4]
			},
			{
				type: 'Conjurer',
				color: '#7DDCAD',
				conditions: [({ weapons, magic }) => weapons >= 0.4 && magic >= 0.4]
			},
			{
				type: 'Savant',
				color: '#F9DBF8',
				conditions: [() => isSavant]
			}
		];

		for (const build of buildTypes) {
			if (build.conditions.every((condition) => condition(percentages))) {
				return { type: build.type, color: build.color };
			}
		}

		return { type: 'None', color: '#FFFFFF' };
	}

	getBuildCode() {
		const playerStatsString = [
			this.level.toString(),
			this.vitalityPoints.toString(),
			this.magicPoints.toString(),
			this.strengthPoints.toString(),
			this.weaponPoints.toString(),
			this.blessing.toString()
		].join(',');

		const magicsString = this.magics
			.map((magic) => listOfMagics.indexOf(magic).toString())
			.join(',');

		const fightingStylesString = this.fightingStyles
			.map((style) => listOfFightingStyles.indexOf(style))
			.join(',');

		const finalString = [
			playerStatsString,
			magicsString,
			fightingStylesString,
			this.build.getBuildCode()
		].join('|');

		console.log(finalString.split('|').map((slotstring) => slotstring.split(',')));
		return finalString;
	}

	loadBuildCode(database: [], codeString: string) {
		try {
			codeString = decodeURI(codeString);
			if (isLegacyArmorBuild(codeString)) {
				codeString = loadOldCode(codeString);
				loadPreMagicFSBuildCode(this, database, codeString);
			} else if (isPreMagicFSBuildCode(codeString)) {
				loadPreMagicFSBuildCode(this, database, codeString);
				console.log('test');
			} else if (isMagicFSv1(codeString)) {
				loadMagicFSv1(this, database, codeString);
			}
			this.fixLevel();
			this.fixPlayerStatPoints();
			this.updateHealth();
			this.build.fixBuildLevels();
			this.build.fixBuildItems();
		} catch (error) {
			console.log(error);
			this.build.resetBuild();
			return false;
		}
	}
}
