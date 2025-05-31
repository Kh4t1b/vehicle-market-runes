import { cars, users, ObjectId } from '$lib/db.js';

export const load = async () => {
  // 🚗 Alle Autos laden
  const allCarsRaw = await cars.find().toArray();

  // 🧑 Alle eindeutigen User-IDs extrahieren
  const userIds = [...new Set(allCarsRaw.map(car => car.userId?.toString()))];

  // 👤 User-Daten zu diesen IDs abrufen
  const allUsers = await users.find({
    _id: { $in: userIds.map(id => new ObjectId(id)) }
  }).toArray();

  // 🗺 Map für schnellen Zugriff bauen
  const userMap = new Map();
  for (const user of allUsers) {
    userMap.set(user._id.toString(), user.name);
  }

  // 📦 Autos mit Usernamen anreichern
  const allCars = allCarsRaw.map(car => ({
  ...car,
  _id: car._id.toString(),
  userId: car.userId?.toString() ?? null,            // <--- ✅ DAS FEHLTE!
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
        console.error('❌ Kein ID-Wert im Formular!');
        return { success: false };
      }

      const result = await cars.deleteOne({ _id: new ObjectId(id) });
      console.log(`🗑️ ${result.deletedCount} Fahrzeug(e) gelöscht (ID: ${id})`);
      return { success: true };
    } catch (err) {
      console.error('❌ Fehler beim Löschen:', err);
      return { success: false, error: err.message };
    }
  }
};
