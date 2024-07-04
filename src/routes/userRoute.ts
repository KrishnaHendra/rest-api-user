// src/routes/userRoutes.ts
import {Router} from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  modifyUser,
  removeUser,
} from "../controllers/userController";

const router = Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.get("/users/:id", getUser);
router.put("/users/:id", modifyUser);
router.delete("/users/:id", removeUser);

export default router;
