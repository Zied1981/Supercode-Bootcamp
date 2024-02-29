import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [firstname, SetFirstname] = useState("");
  const [lastname, SetLastname] = useState("");
  const [email, SetEmail] = useState("");

  return (
    <section className="formcont">
      <div>
        <input
          type="text"
          placeholder="firstname"
          onChange={(event) => SetFirstname(event.target.value)}
          value={firstname}
        />

        <input
          type="text"
          placeholder="lastname"
          onChange={(event) => SetLastname(event.target.value)}
          value={lastname}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => SetEmail(event.target.value)}
          value={email}
        />
      </div>
      <div>
        <p>firstname : {firstname}</p>
        <p>lastname : {lastname}</p>
        <p>email : {email}</p>
      </div>
    </section>
  );
};

export default Form;
