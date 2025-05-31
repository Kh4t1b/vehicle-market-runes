import { cars } from '$lib/db.js';
import { ObjectId } from 'mongodb';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const id = params.id;
  console.log('📦 Detailseite wird geladen mit ID:', id);

  try {
    const car = await cars.findOne({ _id: new ObjectId(id) });

    if (!car) {
      console.log('❌ Fahrzeug nicht gefunden');
      return {
        status: 404,
        error: new Error('Fahrzeug nicht gefunden')
      };
    }

    console.log('✅ Fahrzeug gefunden:', car.title);

    return {
  car: {
    ...car,
    _id: car._id.toString(),
    userId: car.userId?.toString() ?? null // ✅ macht das serialisierbar
  }
};

  } catch (error) {
    console.error('❌ Fehler beim Laden des Fahrzeugs:', error);
    return {
      status: 500,
      error: new Error('Interner Fehler beim Laden der Fahrzeugdetails')
    };
  }
}
