import { MongoClient } from 'mongodb';

const client = new MongoClient(import.meta.env.VITE_DB_URI);
await client.connect();

const db = client.db('vehicle-market');
export const cars = db.collection('cars');
