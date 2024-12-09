import { connectMongo } from '$lib/db';
import { consoleBob } from '$lib/utils';

export { handle } from './auth';

connectMongo().then((): void => {
	consoleBob('Connected to MongoDB (admin)');
});
