// src/models/userModel.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [];

export const getUsers = (): User[] => users;

export const getUserById = (id: number): User | undefined =>
  users.find((user) => user.id === id);

export const addUser = (user: User): User => {
  users.push(user);
  return user;
};

export const updateUser = (
  id: number,
  updatedUser: Partial<User>,
): User | null => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) return null;
  users[userIndex] = {...users[userIndex], ...updatedUser};
  return users[userIndex];
};

export const deleteUser = (id: number): boolean => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) return false;
  users.splice(userIndex, 1);
  return true;
};
