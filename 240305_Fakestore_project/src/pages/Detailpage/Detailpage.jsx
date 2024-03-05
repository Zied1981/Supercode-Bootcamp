import { useParams } from "react-router-dom";
import "./Detailpage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detailpage = () => {
  const [data, setData] = useState([]);
  const [detailsData, setdetailsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/Products")
      .then((res) => res.json())
      .then((datafetch) => setData(datafetch))
      .catch(console.log("fehler im details"));
  }, []);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const find = data.find((item) => Number(item.id) === Number(id));
    setdetailsData(find);
    console.log(find);
  }, [data]);

  return (
    <section className="details_sec">
      {detailsData ? (
        <article className="detailsarticle">
          <Link to="/">back to home</Link>

          <div className="detailcont">
            <img src={detailsData.image} alt="" />
            <p>{detailsData.price}</p>
          </div>

          <p>{detailsData.title}</p>
          <p>{detailsData.description}</p>
        </article>
      ) : (
        <p>laden...</p>
      )}
    </section>
  );
};

export default Detailpage;
