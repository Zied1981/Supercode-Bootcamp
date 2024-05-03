import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDb } from "./models/indexConnect.js";
/* import { Boats } from "./models/Boats.js";
import { Reservations } from "./models/Reservations.js"; */
import { BoatsService } from "./service/indexService.js";
import { ReservationsService } from "./service/indexService.js";

// * Middlewares
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server running");
});

//*!get all boats
app.get("/api/v1/boats", (req, res) => {
  BoatsService.showAllBoats()
    .then((boats) => res.json(boats))
    .catch((err) => {
      res.status(500).json({ err, message: "Could not GET all boats" });
    });
});

//*!get one boat by ID
app.get("/api/v1/boats/:boatId", (req, res) => {
  const boatId = req.params.boatId;
  BoatsService.showBoatDetail(boatId)
    .then((foundBoat) => res.json(foundBoat || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not find boot" + boatId });
    });
});

//*! post new boat
app.post("/api/v1/boats", (req, res) => {
  const newBoat = req.body;
  console.log(newBoat);
  BoatsService.addBoats(newBoat)
    .then((addedBoat) => res.json(addedBoat || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not add a new boot" });
    });
});

//*! update boat by Id
app.patch("/api/v1/boats/:boatId", (req, res) => {
  const boatId = req.params.boatId;
  const updateInfo = req.body;

  BoatsService.editBoat(boatId, updateInfo, { new: true })
    .then((updatedBoat) => res.json(updatedBoat || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not update the boot" });
    });
});

//*! delete boat by Id
app.delete("/api/v1/boats/:boatId", (req, res) => {
  const boatId = req.params.boatId;
  BoatsService.removeBoats(boatId)
    .then((deletedBoat) => res.json(deletedBoat || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not delete the boot" });
    });
});

// ** Reservation Routes ///without Layer Architecture

//*! get all Reservations
app.get("/api/v1/reservations", (req, res) => {
  ReservationsService.showAllReservations()
    .then((reservation) => res.json(reservation))
    .catch((err) => {
      res.status(500).json({ err, message: "Could not GET all reservations" });
    });
});

//*!get one reservation by ID
app.get("/api/v1/reservations/:reservationId", (req, res) => {
  const reservationId = req.params.reservationId;
  ReservationsService.showReservationDetail(reservationId)
    .then((foundreservation) => res.json(foundreservation || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "could not find reservation" + reservationId });
    });
});

//*! post a new  Reservation
app.post("/api/v1/reservations", (req, res) => {
  const newReservation = req.body;
  ReservationsService.addReservation(newReservation)
    .then((addedReservation) => res.json(addedReservation || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not add a new reservation" });
    });
});

//*! update reservation by Id
app.patch("/api/v1/reservations/:reservationId", (req, res) => {
  const reservationId = req.params.reservationId;
  const updateInfo = req.body;

  ReservationsService.editReservation(reservationId, updateInfo, { new: true })
    .then((updatedReservation) => res.json(updatedReservation || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "could not update the reservation" });
    });
});

//*! delete reservation by Id
app.delete("/api/v1/reservations/:reservationId", (req, res) => {
  const reservationId = req.params.reservationId;
  ReservationsService.removeReservation(reservationId)
    .then((deletedreservation) => res.json(deletedreservation || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "could not delete the reservation" });
    });
});

/* // * Server Listener
connectToDb()
  .then(() => {
    const PORT = 8080;
    app.listen(PORT, () =>
      console.log(`Server ready at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  }); */
