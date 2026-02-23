import db from '$lib/dbHandler';
import type { anyItem } from '$lib/utils/itemTypes';

let itemsDB = db.collection<anyItem>('items-woody');
let configDB = db.collection<any>('config-woody');

export async function load({ fetch, setHeaders, locals }) {
	const data = await itemsDB
		.find(
			{ deleted: false },
			{
				projection: {
					_id: 0
				}
			}
		)
		.toArray();
	const config = await configDB.findOne({ name: 'config' }, { projection: { _id: 0 } });

	return {
		items: data,
		config: config
	};
}
