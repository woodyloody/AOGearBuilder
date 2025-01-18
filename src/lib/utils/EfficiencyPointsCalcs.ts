import type { Player } from '$lib/gearBuilder/Player';
import type { GearStats } from '$lib/types/itemTypes';
import type { AOTConfig } from '$lib/types/utilTypes';

export function calculateEP(config: AOTConfig, stats: GearStats, player: Player): number {
	let efficiencyPoints = 0;

	for (const stat in stats) {
		const statValue = stats[stat as keyof GearStats];
		if (statValue !== undefined && statValue !== null) {
			if (stat === 'power') {
				efficiencyPoints += statValue * config.epValues.power;
			} else if (stat == 'defense') {
				efficiencyPoints += statValue * config.epValues.defense;
			}
			//Substats
			else {
				efficiencyPoints += statValue * config.epValues.substat;
			}
		}
	}

	return efficiencyPoints;
}
