import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient(import.meta.env.VITE_DB_URI);
await client.connect();

const db = client.db('vehicle-market');
export const cars = db.collection('cars');
export const users = db.collection('users');
export { ObjectId };
