import express from "express";
import cors from "cors";
import { readEntries, writeEntries } from "./filesyst.js";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(cors());
app.use(express.static("uploads"));

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(express.json());

app.get("/api/v1/entries", (_, res) => {
  readEntries()
    .then((entrie) => res.status(200).json(entrie))
    .catch((err) =>
      res.status(500).json({ err, message: "cannot get all Entries" })
    );
});

app.get(
  "/api/v1/entries/:entrieId",
  param("entrieId").isNumeric(),
  (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", errors: validationErrors.array() });
    }

    const entrieId = req.params.entrieId;
    readEntries()
      .then((entrie) => entrie.find((t) => t.id.toString() === entrieId))
      .then((foundEntrie) => res.status(200).json(foundEntrie))
      .catch((err) =>
        res.status(500).json({ err, message: "could not get entrie" })
      );
  }
);

app.post(
  "/api/v1/entries",
  body("name").isString().notEmpty(),
  body("nachname").isString().notEmpty(),
  body("email").isEmail(),
  body("nachricht").isString().notEmpty(),
  (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", errors: validationErrors.array() });
    }

    readEntries()
      .then((entrie) => {
        let lastEntrie;
        entrie.length === 0
          ? (lastEntrie = 0)
          : (lastEntrie = entrie[entrie.length - 1].id);

        const newEntrie = {
          id: lastEntrie + 1,
          name: req.body.name,
          nachname: req.body.nachname,
          email: req.body.email,
          nachricht: req.body.nachricht,
        };
        return [...entrie, newEntrie];
      })
      .then((newEntrie) => writeEntries(newEntrie))
      .then((newEntrie) => res.status(200).json(newEntrie))
      .catch((err) =>
        res.status(500).json({ err, message: "could not read all entries" })
      );
  }
);

const PORT = 4001;
app.listen(PORT, () => console.log("Server ready at port", PORT));
