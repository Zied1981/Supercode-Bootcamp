import express from "express";
import cors from "cors";
import { readEntries, writeEntries } from "./filesyst.js";
import { body, param, validationResult } from "express-validator";
//create server
const app = express();

//cors middlware
app.use(cors());

//uploading middleware
app.use(express.static("uploads"));

//logging middleware
app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

//bodyparser middleware
app.use(express.json());

//Endpoints//GET/api/v1/entries

app.get("/api/v1/entries", (_, res) => {
  readEntries()
    .then((entrie) => res.status(200).json(entrie))
    .catch((err) =>
      res.status(500).json({ err, message: "cannot get all Entries" })
    );
});

//endpoint get one//GET/api/v1/entries/:id
app.get("/api/v1/entries/:id", param("id").isNumeric(), (req, res) => {
  //logik der constrains
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Data not valid", errors: validationErrors.array() });
  }

  const entrieId = req.params.id;
  readEntries()
    .then((entrie) => entrie.find((t) => t.id.toString() === entrieId))
    .then((foundEntrie) => res.status(200).json(foundEntrie))
    .catch((err) =>
      res.status(500).json({ err, message: "could not get entrie" })
    );
});
//Post one //POST/api/v1/entries
app.post(
  "/api/v1/entries",
  //validation constrains:Einschränkungen
  body("name").isString().notEmpty(),
  body("nachname").isString().notEmpty(),
  body("email").isEmail(),
  body("nachricht").isString().notEmpty(),
  (req, res) => {
    //Logik wie validation erfolgt
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

//DELETE ONE ENDPOINT
app.delete("/api/v1/entries/:id", (req, res) => {
  const deleteEntriesId = req.params.id;
  readEntries()
    .then((allEntries) =>
      allEntries.filter((entry) => entry.id.toString() !== deleteEntriesId)
    )
    .then((updatedEntries) => writeEntries(updatedEntries))
    .then((updatedEntries) => res.status(200).json(updatedEntries))
    .catch((err) => console.log(err, "no delete "));
});

// UPLOAD
// POST one file
const upload = multer({ dest: "./uploads" });
app.post("/api/v1/files/upload", upload.single("profileImg"), (req, res) => {
  console.log(req.file);
  res.json({ fileName: req.file.filename });
});

//PORT & PORT listener
const PORT = 4001;
app.listen(PORT, () => console.log("Server ready at port", PORT));
