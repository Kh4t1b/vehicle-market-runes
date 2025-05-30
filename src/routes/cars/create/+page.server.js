import { cars } from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();

    // ⬇️ Datei extrahieren
    const image = form.get('image');

    let imageUrl = '';
    if (image && typeof image === 'object') {
      const uploadFormData = new FormData();
      uploadFormData.append('file', image);
      uploadFormData.append('upload_preset', process.env.VITE_CLOUDINARY_UPLOAD_PRESET);

      const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME;
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: uploadFormData
      });

      const data = await res.json();
      imageUrl = data.secure_url;
    }

    const newCar = {
      title: form.get('title'),
      brand: form.get('brand'),
      model: form.get('model'),
      year: +form.get('year'),
      price: +form.get('price'),
      imageUrl, // ⬅️ URL vom Cloudinary Upload
      createdAt: new Date()
    };

    console.log('🚗 Neues Auto mit Bild:', newCar);

    await cars.insertOne(newCar);
    throw redirect(303, '/cars');
  }
};
