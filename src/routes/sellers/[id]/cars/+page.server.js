import { users, cars } from '$lib/db.js';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const sellerId = params.id;

  try {
    const seller = await users.findOne({ _id: new ObjectId(sellerId) });

    if (!seller) {
      throw error(404, 'Verkäufer nicht gefunden');
    }

    const allCars = await cars.find({ userId: new ObjectId(sellerId) }).toArray();

    const preparedCars = allCars.map(car => ({
      ...car,
      _id: car._id.toString(),
      userId: car.userId?.toString() ?? null
    }));

    return {
      seller: {
        ...seller,
        _id: seller._id.toString()
      },
      cars: preparedCars
    };
  } catch (err) {
    console.error('Fehler beim Laden der Fahrzeugliste:', err);
    throw error(500, 'Interner Fehler beim Laden der Fahrzeugliste');
  }
}
