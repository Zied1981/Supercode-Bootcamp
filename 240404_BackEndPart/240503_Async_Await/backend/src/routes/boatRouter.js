import express from "express";
import { BoatController } from "../controllers/boatController.js";

// Router ist wie eine mini-app
// const meinRouter = express.Router()
// meinRouter.get("/", (req, res) => {})
// meinRouter.post("/", (req, res) => {}).post("/", (req, res) => {}) // chainen der endpunkte geht auch

export const boatRouter = express
  .Router()
  // .get("/", body("name").isString(), ...middleware, BoatController.getAllBoatsCtrl)

  .get("/", BoatController.getAllBoatsCtrl)
  .get("/:boatId", BoatController.getOneBoatCtrl)
  .post("/", BoatController.postCreateBoatCtrl)
  .patch("/:boatId", BoatController.patchUpdateBoatCtrl)
  .delete("/:boatId", BoatController.deleteBoatCtrl);
