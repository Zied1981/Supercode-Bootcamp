import "./Detailspage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Detailspage = () => {
  const [detailsdata, setDetailsdata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((datafetch) => setDetailsdata(datafetch))
      .catch(console.log("error"));
  }, []);

  const { _id } = useParams();
  console.log(_id);

  useEffect(() => {
    const find = detailsdata.find((item) => String(item._id) === String(_id));
    setFilterdata(find);
    console.log(find);
  }, [detailsdata]);

  return (
    <article className="detailsarti">
      {filterdata ? (
        <section className="detailssec">
          <img src={filterdata.image_url} alt="image" />
          <h2>{filterdata.name}</h2>
          <p>{filterdata.tagline}</p>
          <p> First brewed: {filterdata.first_brewed}</p>
          <p>Attenuation level:{filterdata.attenuation_level}</p>
          <p>{filterdata.description}</p>
          <Link to={"/Fetchpage"}>
            <img src="../../../public/Back.png" alt="" />
          </Link>
          <Navbar />
        </section>
      ) : (
        <p>loading...</p>
      )}
    </article>
  );
};

export default Detailspage;
