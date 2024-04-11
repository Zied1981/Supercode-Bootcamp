import express from "express";
import url from "url";
import path from "path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();

app.use((req, res, next) => {
  console.log("new request", req.method, req.url);
  next();
});
//er soll in mit hilfe von express.static die dateien in public ornder zu verfügung stellen
// wenn ja dann senden an den client,
// wenn nein dann weiter next().
app.use(express.static("public"));

//hierv unten sag ich der soll die home.html datei an den client senden

//wenn die anfrage kommt mit localhost:3300/
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pages/home.html");
});
//wenn die anfrage kommt mit localhost:3300/home
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/pages/home.html");
});
//wenn die anfrage kommt mit localhost:3300/about
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/pages/about.html");
});
//wenn die anfrage kommt mit localhost:3300/work
app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/public/pages/work.html");
});
//wenn die anfrage kommt mit localhost:3300/galerie
app.get("/galerie", (req, res) => {
  res.sendFile(__dirname + "/public/pages/galerie.html");
});

const PORT = 3300;
app.listen(PORT, () => console.log("Server ready at", PORT));
