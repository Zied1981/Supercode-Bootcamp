import { ObjectId } from "mongodb";
import { getDb } from "./getDb";

// bei favorite brauchen wir eine add, delete und show favorite func.
//

function addFavorites(newFavorite) {
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
}

export const favoriteDAO = {
  addFavorites,
  deleteFavorites,
  showFavorites,
};
