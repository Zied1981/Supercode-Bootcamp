import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/">Speisekarte</NavLink>
        <NavLink to="/Contact">Kontakt</NavLink>
        <NavLink to="/Opentime">Öffnunszeiten</NavLink>
        <NavLink to="/Galerie">Galerie</NavLink>
      </nav>
    </header>
  );
};

export default Header;
