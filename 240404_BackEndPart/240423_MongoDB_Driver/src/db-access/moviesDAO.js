import { ObjectId } from "mongodb"; //mongo DB importieren.
import { getDb } from "./getDb.js"; //getfunc importieren.

//func um alle movies zu importieren
function findAll() {
  return getDb().then((db) => db.collection("movieDetails").find().toArray());
}
//func um einen bestimmten film zu finden
function findOne(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("movieDetails").findOne({ _id: idAsObjectId })
  );
}
//func um eine film zu inserieren bzw hinzuzufügen
function insertOne(documentInfo) {
  return getDb()
    .then((db) => db.collection("movieDetails").insertOne(documentInfo))
    .then((result) =>
      result.acknowledged ? { _id: result.insertedId, ...documentInfo } : null
    );
}
//func um einen film zu bearbeiten
function updateOne(id, updateInfo) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb()
    .then((db) =>
      db
        .collection("movieDetails")
        .updateOne({ _id: idAsObjectId }, { $set: updateInfo })
    )
    .then((result) => {
      if (result.acknowledged && result.modifiedCount === 1) return findOne(id);
      else return null;
    });
}
//func um einen film zu löschen
function deleteOne(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);

  return getDb().then((db) =>
    db.collection("movieDetails").findOneAndDelete({ _id: idAsObjectId })
  );
}
//func exportieren als object um
export const moviesDAO = {
  findAll,
  findOne,
  insertOne,
  updateOne,
  deleteOne,
};
