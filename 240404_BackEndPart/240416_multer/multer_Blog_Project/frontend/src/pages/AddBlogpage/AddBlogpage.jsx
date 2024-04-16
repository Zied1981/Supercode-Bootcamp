import { useState } from "react";
import "./AddBlogpage.css";
const AddBlogpage = () => {
  const [input, setInput] = useState("");
  const [img, setImg] = useState("");
  const [text, setText] = useState("");

  const addNewBlog = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blog_title", input);
    formData.append("blog_image", img);
    formData.append("blog_description", text);
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
      </form>
    </div>
  );
};

export default AddBlogpage;
