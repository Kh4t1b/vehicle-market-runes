import { ObjectId } from 'mongodb';
import { users } from '$lib/db';

export async function POST({ params }) {
  try {
    const id = params.id;
    await users.deleteOne({ _id: new ObjectId(id) });
    return new Response(null, { status: 204 });
  } catch (err) {
    console.error('Fehler beim Löschen:', err);
    return new Response('Serverfehler', { status: 500 });
  }
}
