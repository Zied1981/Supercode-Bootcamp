/* import { useEffect, useState } from "react";

const Post = ({ setdata }) => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const updateTodo = (event) => {
    event.preventDefault();

    const updateData = {
      toDo_title: input,
      toDo_type: type,
      toDo_status: status,
    };

    fetch("http://localhost:3000/api/v1/toDos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        setInput("");
        setStatus("");
        setType("");
      })
      .catch((err) => console.log(err));

    return (
      <div>
        <form className="todo-form">
          <input
            type="text"
            placeholder="myTodo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            type="text"
            placeholder="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button type="submit" onClick={updateTodo}>
            Submit
          </button>
        </form>
      </div>
    );
  };
};

export default Post;
 */
import { useState } from "react";

const Post = ({ setdata }) => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const updateTodo = (event) => {
    event.preventDefault();

    const updateData = {
      toDo_title: input,
      toDo_type: type,
      toDo_status: status,
    };

    fetch("http://localhost:3000/api/v1/toDos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        setInput("");
        setStatus("");
        setType("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="myTodo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit" onClick={updateTodo}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
