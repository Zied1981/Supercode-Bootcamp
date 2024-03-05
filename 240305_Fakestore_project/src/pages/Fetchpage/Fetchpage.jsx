import { useEffect, useState } from "react";
import "./Fetchpage.css";
import { Link } from "react-router-dom";
const Fetchpage = () => {
  //hier oben schrieben wir unsere useState() für die fetchpage.
  const [bigData, setBigData] = useState();

  // hierunten fetchen wir unsere API IN DEM UseEFFECT damit der fetch
  //nur ausgefühert wird wenn die komponnente das erstmal gerendert wird.
  //beim 2ten then() übergeben wir die data an unsere
  //setbigdata damit die aktuelle data immer in bigData gespeichert ist.

  useEffect(() => {
    fetch("https://fakestoreapi.com/Products")
      .then((res) => res.json())
      .then((data) => setBigData(data))
      .catch(console.log("error"));
  }, []);

  console.log(bigData);
  //hier im return schreiben wir ins html was wir brauchen nachdem
  //wir über über usere bigdata mappen. hier ist nicht zu vergessen dass map in react 2 param braucht(items,index)
  // <div hier kommt der key ganz aussen um die div herum.key={index}.
  // beim Link übergeben wir den pfad zu der detailspage und greifen
  // dort über id auf den content der objecte.(back ticks nocht veergesseen!!!!!!!)
  //{bigData ? dann bigdata.map und ins html. : dann <p>loading</p>}

  return (
    <article className="fetcharticle">
      <h2>WELCOME</h2>
      <section className="product_container">
        {bigData ? (
          bigData.map((items, index) => (
            <div className="kachel" key={index}>
              <img src={items.image} alt="" />
              <p>{items.title}</p>
              <p>{items.price} €</p>
              <Link to={`/detailpage/${items.id}`}> More Details</Link>
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
