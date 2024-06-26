import type { anyItem } from '$lib/gearBuilder/itemTypes';

export function getItemById(database: anyItem[], id: string) {
	const item = database.find((item) => item.id == id);
	return item;
}
