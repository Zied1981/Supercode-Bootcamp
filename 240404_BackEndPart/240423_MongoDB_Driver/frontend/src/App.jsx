import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import Detailpage from "./pages/Detailpage/Detailpage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <section className="app-sec">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailpage" element={<Detailpage />} />
          <Route path="/addmoviepage" element={<AddMoviePage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
