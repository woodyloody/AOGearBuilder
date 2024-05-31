import type { MainShip } from '$lib/utils/itemTypes';

export const ships: MainShip[] = [
	{
		id: 'Rowboat',
		name: 'Rowboat',
		legend: 'Rowboat Innit',
		durability: 350,
		speed: 30,
		stability: 10,
		turning: 100,
		mainType: 'Boat',
		rarity: 'None',
		hullArmorSlot: 1,
		quartermasterSlot: 0,
		cannonSlot: 0,
		siegeWeaponSlot: 0,
		sailMaterialSlot: 0,
		shipCrewSlot: 0,
		ramSlot: 0,
		deckhandSlot: 1,
		imageId: 'https://i.imgur.com/5pGLWmQ.jpg'
	},
	{
		id: 'Sailboat',
		name: 'Sailboat',
		legend: 'Sailboat Innit',
		durability: 1200,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 65,
		speed: 50,
		stability: 30,
		turning: 80,
		mainType: 'Boat',
		rarity: 'None',
		hullArmorSlot: 1,
		quartermasterSlot: 1,
		cannonSlot: 1,
		siegeWeaponSlot: 0,
		sailMaterialSlot: 1,
		shipCrewSlot: 1,
		ramSlot: 0,
		deckhandSlot: 1,
		imageId: 'https://i.imgur.com/5pGLWmQ.jpg'
	},
	{
		id: 'Caravel',
		name: 'Caravel',
		legend: 'Caravel Innit',
		durability: 2500,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 65,
		speed: 60,
		stability: 45,
		turning: 70,
		mainType: 'Boat',
		rarity: 'None',
		hullArmorSlot: 1,
		quartermasterSlot: 1,
		cannonSlot: 1,
		siegeWeaponSlot: 0,
		sailMaterialSlot: 1,
		shipCrewSlot: 1,
		ramSlot: 1,
		deckhandSlot: 2,
		imageId: 'https://i.imgur.com/5pGLWmQ.jpg'
	},
	{
		id: 'Ketch',
		name: 'Ketch',
		legend: 'Ketch Innit',
		durability: 4000,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 65,
		speed: 70,
		stability: 50,
		turning: 50,
		mainType: 'Boat',
		rarity: 'None',
		hullArmorSlot: 1,
		quartermasterSlot: 2,
		cannonSlot: 1,
		siegeWeaponSlot: 0,
		sailMaterialSlot: 1,
		shipCrewSlot: 1,
		ramSlot: 0,
		deckhandSlot: 4,
		imageId: 'https://i.imgur.com/5pGLWmQ.jpg'
	},
	{
		id: 'Brig',
		name: 'Brig',
		legend: 'Brig Innit',
		durability: 12000,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 1200,
		resilience: 65,
		speed: 75,
		stability: 75,
		turning: 50,
		mainType: 'Boat',
		subType: 'None',
		rarity: 'None',
		rarityColor: '#FFFFFF',
		hullArmorSlot: 1,
		quartermasterSlot: 2,
		cannonSlot: 1,
		siegeWeaponSlot: 1,
		sailMaterialSlot: 1,
		shipCrewSlot: 1,
		ramSlot: 1,
		deckhandSlot: 4,
		imageId: 'https://i.imgur.com/5pGLWmQ.jpg'
	}
];
