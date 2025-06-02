import { cars, users, ObjectId } from '$lib/db.js'; 

export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const image = form.get('image');

    if (!image || typeof image !== 'object') {
      console.log('Kein Bild empfangen');
      return;
    }

    const uploadFormData = new FormData();
    uploadFormData.append('file', image);
    uploadFormData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: uploadFormData
    });

    const cloudinaryData = await res.json();
    const imageUrl = cloudinaryData.secure_url;

    if (!imageUrl) {
      console.error('Bild konnte nicht hochgeladen werden');
      return;
    }

    const title = form.get('title');
    const brand = form.get('brand');
    const model = form.get('model');
    const year = Number(form.get('year'));
    const price = Number(form.get('price'));
    const sellerName = form.get('sellerName');
    const sellerLocation = form.get('sellerLocation');


    if (!title || !brand || !model || !year || !price || !sellerName || !sellerLocation) {
      console.warn('Fehlende Pflichtfelder');
      return;
    }

    let user = await users.findOne({ name: sellerName, location: sellerLocation });

    if (!user) {
      const insertResult = await users.insertOne({
        name: sellerName,
        location: sellerLocation,
        createdAt: new Date()
      });

      user = await users.findOne({ _id: insertResult.insertedId });
    }

    const newCar = {
      title,
      brand,
      model,
      year,
      price,
      userId: user._id,
      imageUrl,
      createdAt: new Date()
    };

    await cars.insertOne(newCar);
    console.log('Fahrzeug gespeichert mit User:', user.name);

    return {
      status: 303,
      redirect: '/cars'
    };
  }
};
