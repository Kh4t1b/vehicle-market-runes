import { cars, users, ObjectId } from '$lib/db.js';

export const load = async () => {

  const allCarsRaw = await cars.find().toArray();

  const userIds = [...new Set(allCarsRaw.map(car => car.userId?.toString()))];

  const allUsers = await users.find({
    _id: { $in: userIds.map(id => new ObjectId(id)) }
  }).toArray();

  const userMap = new Map();
  for (const user of allUsers) {
    userMap.set(user._id.toString(), user.name);
  }

  const allCars = allCarsRaw.map(car => ({
  ...car,
  _id: car._id.toString(),
  userId: car.userId?.toString() ?? null,         
  userName: userMap.get(car.userId?.toString()) ?? 'Unbekannt'
}));


  return { allCars };
};

export const actions = {
  delete: async ({ request }) => {
    try {
      const form = await request.formData();
      const id = form.get('id');

      if (!id) {
        console.error('Kein ID-Wert im Formular!');
        return { success: false };
      }

      const result = await cars.deleteOne({ _id: new ObjectId(id) });
      console.log(`${result.deletedCount} Fahrzeug(e) gelöscht (ID: ${id})`);
      return { success: true };
    } catch (err) {
      console.error('Fehler beim Löschen:', err);
      return { success: false, error: err.message };
    }
  }
};
