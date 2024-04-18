import { useState, useEffect } from "react";

import AddEntrie from "../../components/AddEntrie/AddEntrie";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/api/v1/entries")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <h1>Home</h1>

      <AddEntrie setData={setData} />
      {data.map((item, index) => (
        <div key={index} className="home-container">
          <p>{item.name}</p>

          <a href="#">{item.email}</a>
          <p>schreibt:</p>

          <p>{item.nachricht}</p>
        </div>
      ))}
    </section>
  );
};

export default Home;
