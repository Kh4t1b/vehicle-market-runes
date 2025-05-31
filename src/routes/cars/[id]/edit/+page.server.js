import { cars, ObjectId } from '$lib/db.js';

export async function load({ params }) {
  const id = params.id;
  const car = await cars.findOne({ _id: new ObjectId(id) });

  if (!car) {
    return {
      status: 404,
      error: new Error('Fahrzeug nicht gefunden')
    };
  }

  return {
    car: {
      ...car,
      _id: car._id.toString()
    }
  };
}

export const actions = {
  default: async ({ request, params }) => {
    const form = await request.formData();
    const id = params.id;

    const title = form.get("title");
    const brand = form.get("brand");
    const model = form.get("model");
    const year = Number(form.get("year"));
    const price = Number(form.get("price"));
    const sellerName = form.get("sellerName");
    const sellerLocation = form.get("sellerLocation");
    const image = form.get("image");

    const updateData = {
      title,
      brand,
      model,
      year,
      price,
      sellerName,
      sellerLocation
    };

    // Optionales neues Bild hochladen
    if (image && typeof image === "object" && image.size > 0) {
      const uploadFormData = new FormData();
      uploadFormData.append("file", image);
      uploadFormData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: uploadFormData
      });

      const cloudinaryData = await res.json();
      const imageUrl = cloudinaryData.secure_url;

      if (imageUrl) {
        updateData.imageUrl = imageUrl;
      }
    }

    await cars.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    return {
      status: 303,
      redirect: "/cars"
    };
  }
};
