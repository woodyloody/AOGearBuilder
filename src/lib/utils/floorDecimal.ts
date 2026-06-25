export function floorDecimal(input: number, places: number = 1) {
	const factor = Math.pow(10, places);
	return Math.floor(input * factor) / factor;
}
