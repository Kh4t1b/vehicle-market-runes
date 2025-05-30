import { MongoClient } from 'mongodb';

const client = new MongoClient(import.meta.env.VITE_DB_URI);
await client.connect();

const db = client.db(); // << kein 'vehiclemarket' hardcoden, wenn schon in URI
export const cars = db.collection('cars');
