import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDb } from "./models/indexConnect.js";
import { boatRouter } from "./routes/boatRouter.js";
import { reservationRouter } from "./routes/reservationRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("data/images")); // static file server
app.use(express.json()); // body parser

// route an den boatRouter fangen mit der prefix '/api/v1/boats' an
app.use("/api/v1/boats", boatRouter);
app.use("/api/v1/reservations", reservationRouter);

connectToDb()
  .then(() => {
    // Nur wenn die Datenbankverbindung erfolgreich aufgebaut wird
    // wollen wir unseren server exposen (durch app.listen)
    const PORT = 3006;
    app.listen(PORT, () => console.log("Server listening at port", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit(); // node prozess beenden
  });
