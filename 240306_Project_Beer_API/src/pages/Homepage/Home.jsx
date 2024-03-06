import { Link } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [randomData, setRandomData] = useState();
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => {
        setRandomData(data);
      })
      .catch(console.log("error"));
  }, []);
  console.log(randomData);

  return (
    <article>
      <section className="homeesec">
        <Link to={"/Fetchpage"}>All Beers</Link>
      </section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
        eleifend vitae varius venenatis.
      </p>
      <section className="randombeer">
        {randomData ? (
          <Link to={`/detailspage/${randomData._id}`}>Random Beer</Link>
        ) : (
          <p>loading...</p>
        )}
      </section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
        eleifend vitae varius venenatis.
      </p>
    </article>
  );
};

export default Home;
