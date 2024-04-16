import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/Blogs")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <h1>Home</h1>
        {data.map((item, index) => (
          <div className="home-container" key={index}>
            <p>#{item.id}</p>
            <p>{item.blog_title}</p>
            <img src={"http://localhost:4000/" + item.blog_image} alt="" />
            <p>{item.blog_description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
