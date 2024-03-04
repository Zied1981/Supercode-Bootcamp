import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Mypets from "./pages/Mypets/Mypets";
import Myplants from "./pages/Myplants/Myplants";
import Myhobbies from "./pages/Myhobbies/Myhobbies";
import Mywork from "./pages/Mywork/Mywork";
import Mysocialmedia from "./pages/Socialmedia/Socialmedia";
import Codinglife from "./pages/Codinglife/Codinglife";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/0" element={<Mypets />} />
          <Route path="/blog/1" element={<Myplants />} />
          <Route path="/blog/2" element={<Mywork />} />
          <Route path="/blog/3" element={<Myhobbies />} />
          <Route path="/blog/4" element={<Mysocialmedia />} />
          <Route path="/blog/5" element={<Codinglife />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
