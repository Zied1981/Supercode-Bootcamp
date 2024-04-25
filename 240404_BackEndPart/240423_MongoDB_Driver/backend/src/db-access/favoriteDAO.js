import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

// bei favorite brauchen wir eine add, delete und show favorite func.
//

function createFavorites(newFavorite) {
  return getDb()
    .then((db) => db.collection("favorites").insertOne(newFavorite))
    .then((result) =>
      result.acknowledged ? { _id: result.insertedId, ...newFavorite } : null
    );
}

function deleteFavorites(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);

  return getDb().then((db) =>
    db.collection("favorites").findOneAndDelete({ _id: idAsObjectId })
  );
}

function showFavorites() {
  return getDb().then((db) => db.collection("favorites").find().toArray());

  /*  .then((db) => db.map((id) => id.movieID))
    .then((idsFavoriten) => Promise.all([getDb(), idsFavoriten]))
    .then(([db, idsFavoriten]) =>
      db
        .collection("movieDetails")
        .find({ _id: { $in: idsFavoriten } })
        .toArray()
    ); */
}

export const favoriteDAO = {
  createFavorites,
  deleteFavorites,
  showFavorites,
};
