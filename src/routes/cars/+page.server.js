import { cars } from '$lib/db';

export async function load() {
  const allCarsRaw = await cars.find().toArray();

  // SvelteKit kann ObjectId nicht direkt an den Client senden → toString nötig
  const allCars = allCarsRaw.map(car => ({
    ...car,
    _id: car._id.toString()
  }));

  return { allCars };
}
