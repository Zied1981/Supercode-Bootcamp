import { ReservationsService } from "../service/indexService.js";

function getAllReservationsCtrl(req, res) {
  ReservationsService.showAllReservations()
    .then((reservation) => res.json(reservation))
    .catch((err) => {
      res.status(500).json({ err, message: "Could not GET all reservations" });
    });
}

function getOneReservationCtrl(req, res) {
  const reservationId = req.params.reservationId;
  ReservationsService.showReservationDetail(reservationId)
    .then((foundreservation) => res.json(foundreservation || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "could not find reservation" + reservationId });
    });
}

function postCreateReservationCtrl(req, res) {
  const newReservation = req.body;
  ReservationsService.addReservation(newReservation)
    .then((addedReservation) => res.json(addedReservation || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "could not add a new reservation" });
    });
}

function patchUpdateReservationCtrl(req, res) {
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
}

function deleteReservationCtrl(req, res) {
  const reservationId = req.params.reservationId;
  ReservationsService.removeReservation(reservationId)
    .then((deletedreservation) => res.json(deletedreservation || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "could not delete the reservation" });
    });
}

export const ReservationController = {
  getAllReservationsCtrl,
  getOneReservationCtrl,
  postCreateReservationCtrl,
  patchUpdateReservationCtrl,
  deleteReservationCtrl,
};
