import { fail } from '@sveltejs/kit';
import db from './db';

type SessionObject = {
	id: string;
	permissions: {
		database: boolean;
		users: boolean;
	};
};

export async function verifySession(session: any, permissions: Partial<['database', 'users']>) {
	if (session == null) {
		return fail(403, { message: 'Not logged in' });
	}

	let sessionObj = await db.collection('users').findOne({ id: session.user.id });
	if (sessionObj == null) {
		return fail(403, { message: 'No access' });
	}

	for (let permission of permissions) {
		if (sessionObj.permissions[permission ? permission : ''] == true) {
			continue;
		}

		return fail(403, { message: `No '${permission}' permission` });
	}
	return true;
}
