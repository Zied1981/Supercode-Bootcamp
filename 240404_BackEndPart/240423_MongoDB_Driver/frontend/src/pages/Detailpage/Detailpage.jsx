import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backendUrl } from "../../api/api";

const Detailpage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    /*  const find = movies?.find((singleMovie) => singleMovie._id === id); */
    fetch(`${backendUrl}/api/v1/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(movie);

  addToFavo = () => {};

  return (
    <section>
      <h1>Detailpage</h1>
      <Link to="/favoritepage">
        <button onClick={addToFavo}>Add to Favorite</button>
      </Link>
      <br />
      <button>Edit Movie</button>

      <article className="detail-container">
        <p>{movie?.title}</p>
        <p>{movie?.year}</p>
        <p>{movie?.director}</p>
        <p>{movie?.plot}</p>
      </article>
    </section>
  );
};

export default Detailpage;
