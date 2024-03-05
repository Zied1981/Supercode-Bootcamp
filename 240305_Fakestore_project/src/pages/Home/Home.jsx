import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="homesec">
      <h1>WELCOME IN OUR KHEMIRI SHOP</h1>
      <Link to={"/fetchpage"}>Let's Go Shopping</Link>
    </section>
  );
};

//hier habe ich nur die funct home aufgebaut und und den link to der nächste seite mit {"/page"}
export default Home;
