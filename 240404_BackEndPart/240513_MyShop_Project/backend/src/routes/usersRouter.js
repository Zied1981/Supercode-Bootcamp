import express from "express";
import { UserController } from "../controllers/userController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const usersRouter = express
  .Router()
  .post("/register", UserController.postRegisterUserCtrl)
  .post("/verifyEmail", UserController.postVerifyUserEmailCtrl)
  .post("/login", UserController.postLoginUserCtrl)
  .post("/refresh-token", doJwtAuth, UserController.postRefreshTokenCtrl)
  .delete("/:userId", doJwtAuth, UserController.deleteUserCtrl);
