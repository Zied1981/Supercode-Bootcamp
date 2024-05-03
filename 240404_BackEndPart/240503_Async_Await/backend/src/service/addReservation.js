import { Boats } from "../models/Boats.js";
import { Reservations } from "../models/Reservations.js";

//im backend abfangen timestamp umstllung auf ne  komplette zahl
const toTimestamp = (ddmmyyyy) =>
  new Date(ddmmyyyy.split("/").reverse().join("-")).getTime(); //01234575743636

export const addReservation = async (newReserv) => {
  const allRes = await Reservations.find({
    name: newReserv.name,
  });
  console.log(allRes);

  if (allRes.length === 0) return Reservations.create(newReserv);

  const matchReservation = allRes.find(
    (oldReserv) =>
      (toTimestamp(newReserv.startDate) >= toTimestamp(oldReserv.startDate) &&
        toTimestamp(newReserv.startDate) <= toTimestamp(oldReserv.endDate)) ||
      (toTimestamp(newReserv.endDate) >= toTimestamp(newReserv.startDate) &&
        toTimestamp(newReserv.endDate) <= toTimestamp(oldReserv.endDate))
  );
  console.log(matchReservation);

  if (matchReservation) {
    throw new Error(
      "Reservierung nicht möglich, boot ist belegt bitte anderes Boot wählen oder eine anderes Zeitraum wählen"
    );
  } else {
    return Reservations.create(newReserv);
  }
};
