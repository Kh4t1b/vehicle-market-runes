import { users } from '$lib/db.js';

export async function load() {
  const allUsers = await users.find().toArray();

  const usersList = allUsers.map(user => ({
    _id: user._id.toString(),
    name: user.name,
    location: user.location
  }));

  return {
    users: usersList
  };
}
