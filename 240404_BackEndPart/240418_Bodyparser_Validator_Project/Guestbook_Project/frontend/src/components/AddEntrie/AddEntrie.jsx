import { useState } from "react";
import "./AddEntrie.css";
const AddEntrie = ({ setData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const addNewEntrie = (e) => {
    e.preventDefault();
    const newEntrie = {
      name: firstName,
      nachname: lastName,
      email: emailInput,
      nachricht: textInput,
    };

    fetch("http://localhost:4001/api/v1/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntrie),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err, "fehler im post "));
    setFirstName("");
    setLastName("");
    setEmailInput("");
    setTextInput("");
  };

  return (
    <section className="add-sec">
      <h1>Entries</h1>
      <input
        type="text"
        placeholder="Enter Firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Enter Message"
        cols="30"
        rows="10"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      >
        {" "}
      </textarea>

      <button onClick={addNewEntrie}>Submit</button>
    </section>
  );
};

export default AddEntrie;
