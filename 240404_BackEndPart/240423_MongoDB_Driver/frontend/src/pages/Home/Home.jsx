import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { backendUrl } from "../../api/api";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);

  return (
    <section className="homesec">
      <h1>MovieMagicDatabase has it all. But you can still add to it.</h1>
      <Link to="/addmoviepage">
        <button>add your own</button>
      </Link>

      <article className="home-container">
        {movies?.map((singleMovie, index) => (
          <Link to="/detailpage" key={index}>
            <div className="home-div">
              <h2>{singleMovie.title}</h2>
              <p>{singleMovie.year}</p>
              <p>{singleMovie.director}</p>
              <p>{singleMovie.runtime} min</p>
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default Home;
