import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <article className="homearticle">
      <section className="homee">
        <h4>Welcome to my simple Blog</h4>

        <Link to={`/blog`}>Go to articles</Link>
      </section>
    </article>
  );
};

export default Home;
