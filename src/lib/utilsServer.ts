import { AO_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export function POSTCheck(request: Request): { valid: boolean; data: Response | any } {
	let response;
	try {
		response = request.json();
	} catch (error) {
		return { valid: false, data: json({ message: 'Invalid JSON body' }, { status: 400 }) };
	}

	const key = request.headers.get('API-KEY');
	if (key !== AO_API_KEY) {
		return { valid: false, data: json({ message: 'Invalid API Key' }, { status: 403 }) };
	}

	return { valid: true, data: response };
}
