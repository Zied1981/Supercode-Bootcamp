import { MongoClient } from "mongodb"; //mongoDb importieren
import dotenv from "dotenv"; // auf die .env Datei zugreifen

dotenv.config();

const url = process.env.MONGO_URL; // url aus .env in VAR speichern

const client = new MongoClient(url); //new client  aus der envdatei zur MONGODB_URL

export function getDb() {
  //url-client connecten
  return client.connect().then((connectedClient) => {
    // Datenbank mit dem namen "video" retrunen wo die filme drin sind.
    const dbName = "video";
    const db = connectedClient.db(dbName);
    return db;
  });
}
