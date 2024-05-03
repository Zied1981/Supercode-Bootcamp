import { BoatsService } from "../service/indexService.js";

//! controller with async

async function getAllBoatsCtrl(req, res) {
  try {
    const boats = await BoatsService.showAllBoats();
    res.json(boats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not GET all boats" });
  }
}

async function getOneBoatCtrl(req, res) {
  try {
    const boatId = req.params.boatId;
    const foundBoat = await BoatsService.showBoatDetail(boatId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "could not find boot" + boatId });
  }
}

async function postCreateBoatCtrl(req, res) {
  try {
    const newBoat = req.body;
    const addedBoat = await BoatsService.addBoats(newBoat);
    res.json(addedBoat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "could not add a new boot" });
  }
}

async function patchUpdateBoatCtrl(req, res) {
  try {
    const boatId = req.params.boatId;
    const updateInfo = req.body;
    const updatedBoat = await BoatsService.editBoat(boatId, updateInfo);
    res.json(updatedBoat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "could not update the boot" });
  }
}

async function deleteBoatCtrl(req, res) {
  try {
    const boatId = req.params.boatId;
    const deletedBoat = await BoatsService.removeBoats(boatId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "could not delete the boot" });
  }
}

export const BoatController = {
  getAllBoatsCtrl,
  getOneBoatCtrl,
  postCreateBoatCtrl,
  patchUpdateBoatCtrl,
  deleteBoatCtrl,
};
///////////
// controller without async

/* function getAllBoatsCtrl(req, res) {
  BoatsService.showAllBoats()
    .then((boats) => res.json(boats))
    .catch((err) => {
      res.status(500).json({ err, message: "Could not GET all boats" });
    });
}

function getOneBoatCtrl(req, res) {
  const boatId = req.params.boatId;
  BoatsService.showBoatDetail(boatId)
    .then((foundBoat) => res.json(foundBoat || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not find boot" + boatId });
    });
}

function postCreateBoatCtrl(req, res) {
  const newBoat = req.body;
  console.log(newBoat);
  BoatsService.addBoats(newBoat)
    .then((addedBoat) => res.json(addedBoat || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not add a new boot" });
    });
}

function patchUpdateBoatCtrl(req, res) {
  const boatId = req.params.boatId;
  const updateInfo = req.body;

  BoatsService.editBoat(boatId, updateInfo, { new: true })
    .then((updatedBoat) => res.json(updatedBoat || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not update the boot" });
    });
}

function deleteBoatCtrl(req, res) {
  const boatId = req.params.boatId;
  BoatsService.removeBoats(boatId)
    .then((deletedBoat) => res.json(deletedBoat || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not delete the boot" });
    });
} */
