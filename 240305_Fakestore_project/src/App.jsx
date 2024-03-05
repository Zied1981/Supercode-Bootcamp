import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Fetchpage from "./pages/Fetchpage/Fetchpage";
import Detailpage from "./pages/Detailpage/Detailpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetchpage" element={<Fetchpage />} />
        <Route path="/detailpage/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
