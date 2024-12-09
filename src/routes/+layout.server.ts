import db from '$lib/db';

export async function load({ locals }) {
	const session = await locals.auth();
	let isAdmin = false;
	if (session?.user?.id) {
		isAdmin = (await db.collection('users').findOne({ id: session.user.id })) ? true : false;
	}

	return { session, isAdmin };
}
