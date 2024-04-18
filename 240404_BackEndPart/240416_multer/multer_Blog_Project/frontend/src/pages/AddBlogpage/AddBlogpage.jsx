import { useState } from "react";
import { Link } from "react-router-dom";
import "./AddBlogpage.css";
const AddBlogpage = () => {
  const [input, setInput] = useState("");
  const [img, setImg] = useState("");
  const [text, setText] = useState("");

  const addNewBlog = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Blog", img, img.name);
    console.log(img);

    fetch("http://localhost:4000/api/files/uploads", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const newBlog = {
          id: data.id,
          blog_title: input,
          blog_image: data.blog_image,
          blog_description: text,
        };
        console.log(newBlog);
        return newBlog;
      })
      .then((newBlog) =>
        fetch("http://localhost:4000/api/v1/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBlog),
        })
      )
      .then((res) => res.json())
      .then((data) => {
        setInput("");
        setText("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form>
        <h1>new Post</h1>
        <input
          type="text"
          placeholder="myBlog"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="file" onChange={(e) => setImg(e.target.files[0])} />

        <textarea
          type="text"
          placeholder="myText"
          cols="30"
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button onClick={addNewBlog}>publish</button>
        <Link to={"/"}>
          <button>Back Home</button>
        </Link>
      </form>
    </div>
  );
};

export default AddBlogpage;
