import { cars } from '$lib/db.js';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const carId = params.id;

  try {
    // Versuch die ID in ein ObjectId umzuwandeln
    const objectId = new ObjectId(carId);

    // Suche das Fahrzeug in der Datenbank
    const car = await cars.findOne({ _id: objectId });

    if (!car) {
      // Wenn nicht gefunden, wirf einen 404-Fehler
      throw error(404, 'Fahrzeug nicht gefunden');
    }

    // Gib das Auto zurück mit serialisierbaren Feldern
    return {
      car: {
        ...car,
        _id: car._id.toString(),
        userId: car.userId?.toString() ?? null
      }
    };

  } catch (err) {
    console.error('❌ Fehler beim Laden des Fahrzeugs:', err);
    throw error(500, 'Interner Fehler beim Laden der Fahrzeugdetails');
  }
}
