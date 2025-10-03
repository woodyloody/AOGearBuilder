export function getBuildCode(buildCode: string, regex: RegExp) {
	const match = buildCode.match(regex);
	if (match) {
		return match[0];
	}
	return '';
}
