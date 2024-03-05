import { useParams } from "react-router-dom";
import "./Detailpage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detailpage = () => {
  //hier oben schrieben wir unsere useState() für die Detailspage mit lerrem array als initial wert.
  //hier brauchen wir ein 2tes useState für die filter function auch mit leerem array als initial wert.
  const [data, setData] = useState([]);
  const [detailsData, setdetailsData] = useState([]);

  //Hier fetchen wir die daten aus der API und setten unsere datafetch mit der funct setdata
  // innerhalb des useEffect damit nur fetcht wird ,erst wenn die erste komponnente gerendert wird!!!!!!

  //wichtig:wichtig:!!!!!!!!!!!!!!!!!!!!!-------!!!!!!!!!!!
  // 1. Alle daten Fetchen
  // 2. Linkn oben auslesen damit ich weis welches Produkt ich hier anzeigen lassen soll
  // 3. find() methode schreiben um das einzelne produkt zu finden
  // 4. ins html schreiben
  useEffect(() => {
    fetch("https://fakestoreapi.com/Products")
      .then((res) => res.json())
      .then((datafetch) => setData(datafetch))
      .catch(console.log("fehler im details"));
  }, []);

  //mit hilfe von useParams lesen wir den link aus.

  const { id } = useParams();
  console.log(id);

  //wir lassen die data mit find ()  nach id  durchsuchen und speichern dies in der variable find.
  //anschliessend vergleichen wir ob (item.id aus dem array )=== (id aus dem link. http://localhost:5174/detailpage/1)
  // wir übergeben unsere variable find der setfunc
  // wir schreiben es dort in einem neuen State(setdetailsData(find);)!!!!!!!!!!!
  //in zeile 41 machen wir unsere useEffect abhängig von unsere [data],Jedes mal
  //wenn sich data updatet wird die find methode neu ausgeführt

  useEffect(() => {
    const find = data.find((item) => Number(item.id) === Number(id));
    setdetailsData(find);
    console.log(find);
  }, [data]);

  return (
    <section className="details_sec">
      {detailsData ? (
        <article className="detailsarticle">
          <Link to="/">Back to Home</Link>

          <div className="detailcont">
            <img src={detailsData.image} alt="" />
            <p>€{detailsData.price}</p>
          </div>

          <h4>{detailsData.title}</h4>
          <p>{detailsData.description}</p>
        </article>
      ) : (
        <p>laden...</p>
      )}
    </section>
  );
};

export default Detailpage;
