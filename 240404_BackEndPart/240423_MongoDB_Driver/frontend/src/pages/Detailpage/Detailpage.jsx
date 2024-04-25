import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../api/api";

const Detailpage = () => {
  const [movies, setMovies] = useState([]);
  const { movieID } = useParams();
  console.log(movies);

  useEffect(() => {
    const find = movies?.find((singleMovie) => singleMovie._id === movieID);
    fetch(`${backendUrl}/api/v1/movies/${movieID}`)
      .then((res) => res.json())
      .then((data) => setMovies(find))
      .catch((err) => {
        console.log(err);
      });
  }, [movies]);
  /* console.log(movies); */

  return (
    <section>
      <h1>Detailpage</h1>

      <article className="detail-container">
        {movies?.map((singleMovie, index) => (
          <div key={index} className="detail-div">
            <h2>{singleMovie?.title}</h2>
            <p>{singleMovie?.year}</p>
            <p>{singleMovie?.director}</p>
            <p>{singleMovie?.runtime} min</p>
            <p>{singleMovie?.plot}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Detailpage;
