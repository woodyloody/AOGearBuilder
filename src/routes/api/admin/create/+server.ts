import { json } from '@sveltejs/kit';
import { POSTCheck } from '$lib/utilsServer';
import { consoleBob } from '$lib/utils';
import db from '$lib/db';

const itemsDB = db.collection('items');

const maxTries: number = 100;
const idLength: number = 3;
const validCharacters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandomId() {
	let id: string = '';
	for (let i = 0; i < idLength; i++) {
		id += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
	}
	return id;
}

async function getRandomId(): Promise<string | null> {
	let newId = generateRandomId();
	let tries = 0;

	while (await itemsDB.findOne({ id: newId }, { projection: { _id: 0 } })) {
		newId = generateRandomId();
		tries++;
		if (tries > maxTries) {
			return null;
		}
	}
	return newId;
}

export async function POST({ request }: { request: Request }) {
	const clientIp =
		request.headers.get('cf-connecting-ip') ||
		request.headers.get('x-forwarded-for') ||
		request.headers.get('x-real-ip') ||
		'Unknown';
	consoleBob(`POST ${request.url} called from ${clientIp}`);

	//API and JSON Checking
	const postCheck = await POSTCheck(request);

	if (!postCheck.valid) {
		consoleBob(`POST Check failed : ${postCheck.data.message}`);
		return postCheck.data;
	}

	//Random Id Generation
	const id = await getRandomId();
	if (!id) {
		consoleBob('Failed to generate random ID');
		return json(
			{
				message:
					'Something has gone wrong. Reached max IDs generated. The database maybe full please contact a developer.',
				id: -1
			},
			{ status: 403 }
		);
	}

	await db.collection('anytest').insertOne(postCheck.data);

	return json({ message: 'Success', data: postCheck.data }, { status: 200 });
}
