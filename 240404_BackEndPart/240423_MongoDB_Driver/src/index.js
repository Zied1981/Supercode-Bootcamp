import express from "express";
import morgan from "morgan";
import { moviesDAO } from "./db-access/moviesDAO.js";
import { ObjectId } from "mongodb";
import { favoriteDAO } from "./db-access/favoriteDAO.js";

const app = express();

//logging middleware
app.use(morgan("dev"));

//bodyparser
app.use(express.json());

//allgemein GET
app.get("/", (_, res) => res.json("it works"));

//Get all movies
app.get("/api/v1/movies", (req, res) => {
  moviesDAO
    .findAll()
    .then((movies) => res.json(movies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add find all movies" });
    });
});

//Get one movie byID
app.get("/api/v1/movies/:moviesId", (req, res) => {
  const moviesId = req.params.moviesId;
  Promise.all([moviesDAO.findOne(moviesId)])
    .then(([foundMovie]) => res.json(foundMovie ? { ...foundMovie } : {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "Could not add find movie " + moviesId });
    });
});
//Post new Movie
app.post("/api/v1/movies", (req, res) => {
  const newMovie = req.body;

  moviesDAO
    .insertOne(newMovie)
    .then((addedMovie) => res.json(addedMovie || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not add new movie" })
    );
});
//Patch one movie
app.patch("/api/v1/movies/:movieId", (req, res) => {
  //   VARIABLE für die ID
  const movieId = req.params.movieId;

  // Variable für zu ändernden Infos aus dem request body
  const updateInfo = req.body;

  // Aufruf der func um infos upzudaten
  moviesDAO
    .updateOne(movieId, updateInfo)
    .then((updatedMovie) => res.json(updatedMovie || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not update the movie" })
    );
});
//DELETE one MOVIE
app.delete("/api/v1/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  moviesDAO
    .deleteOne(movieId)
    .then((deletedMovie) => res.json(deletedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete movie" });
    });
});

//***favoriten movies */
//GET/api/v1/favorites
//GET alle favoriten

app.get("/api/v1/favorites", (_, res) => {
  favoriteDAO
    .showFavorites()
    .then((favoriteMovie) => res.json(favoriteMovie))
    .catch((err) => {
      console.log(err);
      res.status(200).json({ err, message: "Could not find favorite movies" });
    });
});

//POST favorite film//film Hinzufügen
app.post("/api/v1/favorites", (req, res) => {
  const newFavoriteInfo = req.body;
  favoriteDAO
    .addFavorites(newFavoriteInfo)
    .then((addedFavorite) => res.json(addedFavorite || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not add movie to favorites" })
    );
});

//delete favorite film //aus favo entfernen
app.delete("/api/v1/favorites/:favoriteId", (req, res) => {
  const favoriteId = req.params.favoriteId;

  favoriteDAO
    .deleteFavorites(favoriteId)
    .then((deletedFavorite) => res.json(deletedFavorite || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete movie" });
    });
});

const PORT = 3008;
app.listen(PORT, () => console.log("Server listening at port", PORT));
