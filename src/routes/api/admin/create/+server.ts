import { json } from '@sveltejs/kit';
import { POSTCheck } from '$lib/utilsServer';
import { consoleBob } from '$lib/utils';

export async function POST({ request }: { request: Request }) {
	const clientIp =
		request.headers.get('cf-connecting-ip') ||
		request.headers.get('x-forwarded-for') ||
		request.headers.get('x-real-ip') ||
		'Unknown';

	const postCheck = POSTCheck(request);

	consoleBob(
		`[${postCheck.valid ? 'SUCCESS' : 'ERROR'}] POST ${request.url} called from ${clientIp}`
	);

	if (!postCheck.valid) {
		return postCheck.data;
	}

	return json({ message: 'Success', data: postCheck.data }, { status: 200 });
}
