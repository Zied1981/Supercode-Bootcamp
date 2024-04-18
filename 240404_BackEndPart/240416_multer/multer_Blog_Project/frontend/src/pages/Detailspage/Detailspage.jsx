import "./Detailspage.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detailspage = () => {
  const { id } = useParams();
  const [idBlog, setIdBlog] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/blogs/" + id)
      .then((res) => res.json())
      .then((data) => setIdBlog(data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(idBlog);

  return (
    <div>
      <h1>detailpage</h1>
      <section className="detail">
        <h1>{idBlog.blog_title}</h1>
        <div>
          <img
            src={"http://localhost:4000/" + idBlog.blog_image}
            alt={id.blog_title}
          />

          <p>{idBlog.blog_description}</p>
          <Link to={"/"}>
            <button>Back Home</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Detailspage;
