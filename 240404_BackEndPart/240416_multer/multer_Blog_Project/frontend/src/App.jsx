import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AddBlogpage from "./pages/AddBlogpage/AddBlogpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addblogpage" element={<AddBlogpage />} />
          {/*     <Route path="/detail/:id" element={<Detailspage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
