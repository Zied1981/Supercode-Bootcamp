import express from "express";
import { ReservationController } from "../controllers/reservationController.js";
export const reservationRouter = express
  .Router()
  .get("/", ReservationController.getAllReservationsCtrl)
  .get("/:reservationId", ReservationController.getOneReservationCtrl)
  .post("/", ReservationController.postCreateReservationCtrl)
  .patch("/:reservationId", ReservationController.patchUpdateReservationCtrl)
  .delete("/:reservationId", ReservationController.deleteReservationCtrl);
