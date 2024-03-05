import { useEffect, useState } from "react";
import "./Fetchpage.css";
import { Link } from "react-router-dom";
const Fetchpage = () => {
  const [bigData, setBigData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/Products")
      .then((res) => res.json())
      .then((data) => setBigData(data))
      .catch(console.log("error"));
  }, []);

  console.log(bigData);

  return (
    <article className="fetcharticle">
      <h2>willkommen</h2>
      <section className="product_container">
        {bigData ? (
          bigData.map((items, index) => (
            <div className="kachel" key={index}>
              <img src={items.image} alt="" />
              <p>{items.title}</p>
              <p>{items.price} €</p>
              <Link to={`/detailpage/${items.id}`}>show more</Link>
            </div>
          ))
        ) : (
          <p>laden...</p>
        )}
      </section>
    </article>
  );
};

export default Fetchpage;
