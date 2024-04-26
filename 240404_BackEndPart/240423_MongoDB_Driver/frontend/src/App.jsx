import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import Detailpage from "./pages/Detailpage/Detailpage";
import Home from "./pages/Home/Home";

import Favoritepage from "./pages/Favoritepage/Favoritepage";

function App() {
  return (
    <section className="app-sec">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailpage/:id" element={<Detailpage />} />
          <Route path="/addmoviepage" element={<AddMoviePage />} />
          <Route path="/favoritepage" element={<Favoritepage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
