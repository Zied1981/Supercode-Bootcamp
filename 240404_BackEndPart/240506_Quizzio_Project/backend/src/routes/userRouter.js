import express from "express";
import { UserController } from "../controllers/userController.js";

export const userRouter = express
  .Router()
  // .get("/", body("name").isString(), ...middleware, UserController.getAllUsersCtrl)

  .get("/", UserController.getAllUsersCtrl)

  .post("/", UserController.postCreateUserCtrl)
  .patch("/:userId", UserController.patchUpdateUserCtrl)
  .delete("/:userId", UserController.deleteUserCtrl);
