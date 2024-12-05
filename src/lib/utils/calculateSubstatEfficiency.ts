import type { Player } from '$lib/gearBuilder/playerClasses';
import { evaluate, parse, OperatorNode } from 'mathjs';

function evaluateValue(key: string, values: Record<string, string>): number {
	let stat = 1;
	if (key in values) {
		stat = evaluate(values[key], values);
	}
	return stat;
}

export function evaluateStat(key: string, values: Record<string, string>): number {
	let stack: string[] = [key];
	let ended = false;
	while (stack.length > 0) {
		let current: string = stack[stack.length - 1];
		let parsed = parse(values[current]) as OperatorNode;

		if ('args' in parsed && !ended) {
			for (let arg of parsed.args) {
				if ('name' in arg) {
					if (stack.includes(arg.name as string) && arg.name != current) {
						return NaN;
					} else {
						stack.push(arg.name as string);
					}
				}
			}
		}

		if ('name' in parsed) {
			return NaN;
		}
		if (current == stack[stack.length - 1]) {
			values[current] = evaluateValue(current, values).toString();
			stack.pop();
			ended = true;
		}
	}

	return evaluateValue(key, values);
}

export function calculateSubstatEfficiency(
	statAmount: number,
	statKey: string,
	player: Player,
	values: Record<string, string>,
	formulas: Record<string, Record<string, string>>
) {
	const playerLevel = player.level;
	let multiplier: number = 1;

	if (statKey in values) {
		multiplier = evaluateStat(statKey, values);
	}
	const percentCalcOld =
		multiplier *
		1.35 *
		((16 * Math.pow(Math.log(0.1 * statAmount + 4), 3) * 0.09 + 0.15 * statAmount) /
			(0.1 + 0.15 * Math.pow(playerLevel, 0.5)) -
			0.79);

	let percentCalc = evaluate(formulas.baseline.value.toString(), {
		multiplier: multiplier,
		statAmount: statAmount,
		playerLevel: playerLevel
	});
	percentCalc *= statAmount / Math.abs(statAmount);
	return Math.round((percentCalc + Number.EPSILON) * 100) / 100;
}
