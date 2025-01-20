import db from '$lib/db';
import { consoleBob } from '$lib/utils';

export async function load(): Promise<{ items: any; config: any }> {
	const items = await db
		.collection('items-test')
		.find({ deleted: false }, { projection: { _id: 0 } })
		.toArray();

	const config = await db
		.collection('config')
		.findOne({ name: 'config' }, { projection: { _id: 0 } });

	return { items, config };
}
