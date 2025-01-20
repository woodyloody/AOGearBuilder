import type { AnyItemDetails } from '$lib/types/itemTypes';
import type { FightingStyle, Magic } from '$lib/types/playerTypes';
import type { AOTConfig } from '$lib/types/utilTypes';
import { PlayerBuild } from './PlayerBuild';
import type { PlayerBuildSlot } from './PlayerBuildSlot';
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

	constructor(database: AnyItemDetails[], config: AOTConfig, level = config.maxLevel, health = 93) {
		this.database = database;
		this.config = config;

		this.level = level;
		this.health = health + this.level * 7;

		this.minLevel = 1;
		this.maxLevel = config.maxLevel;

		this.build = new PlayerBuild(this);

		this.statBuild = new PlayerStatBuild(this);
	}

	updateHealth() {
		const baseHealth = 93 + this.level * 7;

		this.health =
			baseHealth + (this.build.getBuildStats().defense || 0) + this.statBuild.vitality * 4;
	}
}
