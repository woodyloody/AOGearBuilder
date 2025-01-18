import type { AnyItemDetails } from '$lib/types/itemTypes';
import type { FightingStyle, Magic } from '$lib/types/playerTypes';
import type { AOTConfig } from '$lib/types/utilTypes';
import { PlayerBuild } from './PlayerBuild';
import { PlayerStatBuild } from './PlayerStatBuild';
import { statBuilds, type StatBuildDetails } from './statBuilds';

export class Player {
	database: AnyItemDetails[];
	config: AOTConfig;

	minLevel: number;
	maxLevel: number;

	level: number;
	health: number;

	build: PlayerBuild;

	statBuild: PlayerStatBuild;

	constructor(
		database: AnyItemDetails[],
		config: AOTConfig,
		maxLevel: number,
		level = maxLevel,
		health = 93
	) {
		this.database = database;
		this.config = config;

		this.level = $state<number>(level);
		this.health = $state<number>(health + this.level * 7);

		this.minLevel = 1;
		this.maxLevel = maxLevel;

		this.build = $state<PlayerBuild>(new PlayerBuild(this));

		this.statBuild = $state<PlayerStatBuild>(new PlayerStatBuild(this));
	}

	updateHealth() {
		const baseHealth = 93 + this.level * 7;

		this.health =
			baseHealth + (this.build.getBuildStats().defense || 0) + this.statBuild.vitality * 4;
	}
}
