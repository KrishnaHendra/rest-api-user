// src/controllers/userController.ts
import {Request, Response} from "express";
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  User,
} from "../models/userModel";

export const getAllUsers = (req: Request, res: Response): void => {
  const data = getUsers();
  res.status(200).json(data);
};

export const getAllUsers2 = (req: Request, res: Response): void => {
  const data = getUsers();
  res.status(200).json(data);
};

export const getUser = (req: Request, res: Response): void => {
  const user = getUserById(parseInt(req.params.id));

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({message: "User not found"});
  }
};

export const createUser = (req: Request, res: Response): void => {
  const newUser: User = {...req.body, id: Date.now()};
  addUser(newUser);

  res.status(201).json(newUser);
};

export const modifyUser = (req: Request, res: Response): void => {
  const updatedUser = updateUser(parseInt(req.params.id), req.body);

  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({message: "User not found"});
  }
};

export const removeUser = (req: Request, res: Response): void => {
  const success = deleteUser(parseInt(req.params.id));

  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({message: "User not found"});
  }
};
