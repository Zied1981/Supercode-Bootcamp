import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="homee">
      <h4>Welcome to my simple Blog</h4>

      <Link to={`/blog`}>Go to articles</Link>
    </section>
  );
};

export default Home;
