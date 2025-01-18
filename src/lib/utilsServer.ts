import { AO_API_KEY } from '$env/static/private';
import { fail, json } from '@sveltejs/kit';
import { consoleBob } from './utils';

export async function POSTCheck(
	request: Request
): Promise<{ valid: boolean; data: Response | any }> {
	let response;
	try {
		response = await request.json();
	} catch (error) {
		return { valid: false, data: json({ message: 'Invalid JSON body' }, { status: 400 }) };
	}

	const key = request.headers.get('API-KEY');
	if (key !== AO_API_KEY) {
		return { valid: false, data: json({ message: 'Invalid API Key' }, { status: 403 }) };
	}

	return { valid: true, data: response };
}
