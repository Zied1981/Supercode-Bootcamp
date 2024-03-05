import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Willkommen im Shop</h1>
      <Link to={"/fetchpage"}>zum shop</Link>
    </section>
  );
};

export default Home;
