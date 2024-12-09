import { AO_API_KEY } from '$env/static/private';
import { verifySession } from '$lib/pageAuth';
import type { Actions } from '@sveltejs/kit';

export const actions = {
	create: async (event) => {
		let session = await event.locals.auth();
		let validSession = await verifySession(session, ['database']);
		if (validSession != true) {
			return validSession;
		}

		const formData = await event.request.formData();

		const response = await fetch('/api/admin/create', {
			method: 'POST',
			body: formData,
			headers: { 'Content-Type': 'application/json', 'API-KEY': AO_API_KEY }
		});

		return response.json();
	}
} satisfies Actions;
