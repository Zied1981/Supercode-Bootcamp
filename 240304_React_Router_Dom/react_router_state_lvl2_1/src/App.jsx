import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speisekarte from "./pages/Speisekarte/Speisekarte";
import Header from "./components/Header/Header";
import Opentime from "./pages/Opentime/Opentime";
import Galerie from "./pages/Galerie/Galerie";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Speisekarte />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Opentime" element={<Opentime />} />
        <Route path="/Galerie" element={<Galerie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
