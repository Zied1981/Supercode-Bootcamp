import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homepage/Home";
import Fetchpage from "./pages/Fetchpage/Fetchpage";
import Detailspage from "./pages/Detailspage/Detailspage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetchpage" element={<Fetchpage />} />
        <Route path="/detailspage/:_id" element={<Detailspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
