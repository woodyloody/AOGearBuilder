import type { FightingStyle, Magic } from '$lib/types/playerTypes';
import { consoleBob } from '$lib/utils';
import { magicRecords } from './magicRecords';
import type { Player } from './Player';
import { statBuilds, type StatBuildDetails } from './statBuilds';

export class PlayerStatBuild {
	player: Player;

	vitality: number;
	magic: number;
	strength: number;
	weapon: number;

	savantChoice: 'Magic' | 'Strength';
	magics: Magic[];
	fightingStyles: FightingStyle[];

	statBuildType: StatBuildDetails;

	constructor(player: Player) {
		this.player = player;

		this.vitality = 0;
		this.magic = 0;
		this.strength = 0;
		this.weapon = 0;

		this.savantChoice = 'Magic';
		this.magics = ['Acid'];
		this.fightingStyles = [];

		this.statBuildType = statBuilds['None'];
	}

	changeStatPoint(stat: 'vitality' | 'magic' | 'strength' | 'weapon', value: number) {
		const maxStatPoints = this.player.level * 2;
		const currentTotalStats = this.vitality + this.magic + this.strength + this.weapon;

		// Handle if you add +10 and its reached max
		let amountToChange = 0;
		if (currentTotalStats + value > maxStatPoints) {
			amountToChange = maxStatPoints - currentTotalStats;
		} else {
			amountToChange = value;
		}

		if (stat === 'vitality') {
			this.vitality += amountToChange;
		} else if (stat === 'magic') {
			this.magic += amountToChange;
		} else if (stat === 'strength') {
			this.strength += amountToChange;
		} else if (stat === 'weapon') {
			this.weapon += amountToChange;
		}
		this.updateStatBuild();
	}

	updateStatBuild() {
		this.statBuildType = this.getStatBuildType();
		let magicNo = this.statBuildType.magicNo;
		let fightingStyleNo = this.statBuildType.fightingStyleNo;

		// Savant extra handling
		if (this.getStatBuildType().name === 'Savant') {
			if (this.savantChoice === 'Magic') {
				this.statBuildType.magicNo += 1;
			} else if (this.savantChoice === 'Strength') {
				this.statBuildType.fightingStyleNo += 1;
			}
		}

		// Add default magics when magic count increase
		if (this.magics.length < magicNo) {
			const diff = magicNo - this.magics.length;
			for (let i = 0; i < diff; i++) {
				const otherMagics = Object.keys(magicRecords).filter(
					(magic) => !this.magics.includes(magic as Magic)
				) as Magic[];
				this.magics.push(otherMagics[0]);
			}
		}

		// Add default fighting styles when fighting style count increase
		if (this.fightingStyles.length < fightingStyleNo) {
			const diff = fightingStyleNo - this.fightingStyles.length;
			for (let i = 0; i < diff; i++) {
				const otherFightingStyles = Object.keys(statBuilds).filter(
					(fightingStyle) => !this.fightingStyles.includes(fightingStyle as FightingStyle)
				) as FightingStyle[];
				this.fightingStyles.push(otherFightingStyles[0]);
			}
		}

		// Remove extra magics (if any)
		this.magics.splice(magicNo);
		this.fightingStyles.splice(fightingStyleNo);

		// Fix build items
		this.player.build.fixBuildItems();
	}

	fixStatPoints() {
		// Stat point balancing when reducing level
		const maxStatPoints = this.player.level * 2;

		while (this.vitality + this.magic + this.strength + this.weapon > maxStatPoints) {
			let currentPlayerStatPoints = {
				vitality: this.vitality,
				magic: this.magic,
				strength: this.strength,
				weapon: this.weapon
			};

			const highestStat = Math.max(...Object.values(currentPlayerStatPoints));

			for (let stat in currentPlayerStatPoints) {
				if (currentPlayerStatPoints[stat as keyof typeof currentPlayerStatPoints] === highestStat) {
					currentPlayerStatPoints[stat as keyof typeof currentPlayerStatPoints] -= 1;
				}
			}

			this.vitality = currentPlayerStatPoints.vitality;
			this.magic = currentPlayerStatPoints.magic;
			this.strength = currentPlayerStatPoints.strength;
			this.weapon = currentPlayerStatPoints.weapon;
		}
	}

	getStatBuildType(): StatBuildDetails {
		const totalStats = this.vitality + this.magic + this.strength + this.weapon;
		const percentages: Record<'vitality' | 'magic' | 'strength' | 'weapon', number> = {
			vitality: this.vitality / totalStats,
			magic: this.magic / totalStats,
			strength: this.strength / totalStats,
			weapon: this.weapon / totalStats
		};

		const buildTypes: {
			type: keyof typeof statBuilds;
			color: string;
			conditions: Array<
				(percentages: Record<'vitality' | 'magic' | 'strength' | 'weapons', number>) => boolean
			>;
		}[] = [
			{
				type: 'Warden',
				color: '#00FC00',
				conditions: [({ vitality }) => vitality > 0.6]
			},
			{
				type: 'Berserker',
				color: '#FF6060',
				conditions: [({ strength }) => strength > 0.6]
			},
			{
				type: 'Warrior',
				color: '#F7F75E',
				conditions: [({ weapons }) => weapons > 0.6]
			},
			{
				type: 'Mage',
				color: '#02B1EB',
				conditions: [({ magic }) => magic > 0.6]
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
				conditions: [
					({ vitality, magic, strength, weapons }) =>
						(vitality >= 0.15 || magic >= 0.15 || strength >= 0.15 || weapons >= 0.15) &&
						[vitality, magic, strength, weapons].filter((value) => value >= 0.15).length >= 3
				]
			}
		];

		for (const buildType of buildTypes) {
			if (buildType.conditions.every((condition) => condition(percentages as any))) {
				return statBuilds[buildType.type];
			}
		}

		consoleBob('No stat build type found');
		return statBuilds['None'];
	}

	setMagic(magic: Magic, index: number) {
		try {
			this.magics[index] = magic;
			this.player.build.fixBuildItems(); // Fix magic item compatibility
		} catch (e) {
			consoleBob('PlayerTechniques.setMagic() - Error', e);
		}
	}

	setFightingStyle(fightingStyle: FightingStyle, index: number) {
		try {
			this.fightingStyles[index] = fightingStyle;
			this.player.build.fixBuildItems(); // Fix fighting style item compatibility
		} catch (e) {
			consoleBob('PlayerTechniques.setFightingStyle() - Error', e);
		}
	}

	resetStatPoints() {
		this.vitality = 0;
		this.magic = 0;
		this.strength = 0;
		this.weapon = 0;

		this.updateStatBuild();
	}
}
