import db, { corsHeaders } from '$lib/db';
import { consoleBob } from '$lib/utils';
import { json } from '@sveltejs/kit';

type ParsedParams = {
	ids?: string[];
	mainTypes?: string[];
	names?: string[];
};

export async function GET({ url, request }: { url: URL; request: Request }) {
	const clientIp =
		request.headers.get('cf-connecting-ip') ||
		request.headers.get('x-forwarded-for') ||
		request.headers.get('x-real-ip') ||
		'Unknown';

	consoleBob(`GET ${url} called from ${clientIp}`);

	const validSearchParams: (keyof ParsedParams)[] = ['ids', 'mainTypes', 'names'];
	const parsedParams: ParsedParams = {};
	const filters: Record<string, any> = { deleted: false };

	// Parse query parameters
	for (const param of validSearchParams) {
		const values = url.searchParams.get(param);
		if (values) {
			parsedParams[param] = values.split('|').map((value) => value.trim());

			// Add filters to MongoDB query
			if (param === 'ids') {
				filters.id = { $in: parsedParams.ids };
			} else if (param === 'mainTypes') {
				filters.mainType = { $in: parsedParams.mainTypes };
			} else if (param === 'names') {
				filters.name = { $in: parsedParams.names };
			}
		}
	}

	try {
		const data = await db
			.collection('items')
			.find(filters, { projection: { _id: 0 } })
			.toArray();

		return json(data, { headers: corsHeaders, status: 200 });
	} catch (error) {
		consoleBob(`Error fetching data from the database : ${error}`);

		return json(
			{
				error: 'An error occurred while fetching data from the database.'
			},
			{
				status: 500
			}
		);
	}
}
