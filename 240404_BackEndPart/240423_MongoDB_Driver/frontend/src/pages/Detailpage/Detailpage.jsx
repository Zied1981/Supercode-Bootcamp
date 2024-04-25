import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../api/api";

const Detailpage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  console.log(movie);

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

  return (
    <section>
      <h1>Detailpage</h1>

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
