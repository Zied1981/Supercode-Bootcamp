import { useState } from "react";
import { backendUrl } from "../../api/api";
import { Link } from "react-router-dom";

const AddMoviePage = () => {
  const [title, setTitle] = useState();
  const [year, setYear] = useState();
  const [director, setDirector] = useState();
  const [genre, setGenre] = useState();
  const [rate, setRate] = useState();
  const [description, setDescription] = useState();

  const addMovie = (e) => {
    e.preventDefault();

    fetch(`${backendUrl}/api/v1/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, year, director, genre, rate, description }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <Link to="/">
        <button>back to home</button>
      </Link>
      <h1>Add your own movie</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <input
          style={{ fontSize: "larger" }}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          style={{ fontSize: "larger" }}
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          style={{ fontSize: "larger" }}
          type="text"
          placeholder="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <input
          style={{ fontSize: "larger" }}
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          style={{ fontSize: "larger" }}
          type="text"
          placeholder="Rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <input
          style={{ fontSize: "larger" }}
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addMovie}>Submit</button>
      </form>
    </section>
  );
};

export default AddMoviePage;
