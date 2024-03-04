import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <h2>My Life</h2>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
