import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="navi">
      <Link to={"/"}>
        <img src="../../../public/Logo (1).svg" alt="beer" />
      </Link>
    </section>
  );
};

export default Navbar;
