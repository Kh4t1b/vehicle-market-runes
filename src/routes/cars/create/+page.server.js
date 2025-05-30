import { cars } from '$lib/db';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();

    const newCar = {
      title: form.get('title'),
      brand: form.get('brand'),
      model: form.get('model'),
      year: +form.get('year'),
      price: +form.get('price')
    };

    await cars.insertOne(newCar);

    throw redirect(303, '/cars');
  }
};
