import { MONGO_CONNECT_URL } from '$env/static/private';
import { MongoClient } from 'mongodb';
import { consoleBob } from './utils';

export const corsHeaders = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Allow-Methods': 'GET'
};

const client = new MongoClient(MONGO_CONNECT_URL);

export default client.db();

export function connectMongo(): Promise<MongoClient> {
	consoleBob('Connecting to MongoDB...');
	return client.connect();
}
