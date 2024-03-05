import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="homesec">
      <h1>WELCOME IN OUR SHOP</h1>
      <Link to={"/fetchpage"}>Let's Go Shopping</Link>
    </section>
  );
};

export default Home;
