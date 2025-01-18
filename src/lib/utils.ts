import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function consoleBob(...args: any[]) {
	console.log(`[${new Date().toLocaleString()}] `, ...args);
}

export const staticImagesRootFolder: string =
	'https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main';
