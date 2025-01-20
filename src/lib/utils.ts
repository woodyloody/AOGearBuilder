import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Rarities } from './types/itemTypes';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function consoleBob(...args: any[]) {
	console.log(`[${new Date().toLocaleString()}] `, ...args);
}

export const staticImagesRootFolder: string =
	'https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main';

export const rarityColors: { [key in Rarities]: string } = {
	None: '#FFFFFF',
	Common: '#7D7D7F',
	Uncommon: '#817346',
	Rare: '#6765EC',
	Exotic: '#FF0000',
	Seasonal: '#C001C2',
	Legendary: '#00FF00'
};
