import type {
	anyItem,
	ArmorMainTypes,
	EnchantMainTypes,
	GemMainTypes,
	ModifierMainTypes,
	ShipMainTypes
} from './itemTypes';

export function findNoneItem(
	database: anyItem[],
	mainType: GemMainTypes & ShipMainTypes & ArmorMainTypes & EnchantMainTypes & ModifierMainTypes
) {
	return database.find((item) => item.name === 'None' && item.mainType === mainType) || null;
}
