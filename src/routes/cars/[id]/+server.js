import { cars } from '$lib/db.js';
import { ObjectId } from 'mongodb';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ params }) {
  const id = params.id;
  console.log('🗑️ Löschversuch für Fahrzeug ID:', id);

  try {
    const result = await cars.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      console.warn('⚠️ Kein Fahrzeug gelöscht (nicht gefunden)');
      return new Response('Fahrzeug nicht gefunden', { status: 404 });
    }

    console.log('✅ Fahrzeug erfolgreich gelöscht');
    return new Response(null, { status: 200 });
  } catch (error) {
    console.error('❌ Fehler beim Löschen:', error);
    return new Response('Fehler beim Löschen', { status: 500 });
  }
}
