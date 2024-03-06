import "./Fetchpage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Fetchpage = () => {
  const [bigData, setBigData] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => {
        setBigData(data);
      })
      .catch(console.log("error"));
  }, []);
  console.log(bigData);

  return (
    <article className="fetcharticle">
      <section className="product_container">
        {bigData ? (
          bigData.map((items, index) => (
            <div className="kachel" key={index}>
              <img src={items.image_url} alt="" />
              <div className="infos">
                <h2>{items.name}</h2>
                <p>{items.tagline}</p>
                <h6>Created by:{items.name}</h6>

                <Link to={`/detailspage/${items._id}`}>Details</Link>
              </div>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </section>
      <Navbar />
    </article>
  );
};

export default Fetchpage;
