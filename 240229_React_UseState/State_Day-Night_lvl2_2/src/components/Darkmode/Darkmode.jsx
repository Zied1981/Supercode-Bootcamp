import { useState } from "react";
import "./Darkmode.css";
const Darkmode = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <section className="sec">
      <div className={darkmode ? "dark" : "light"}>
        <h2>{darkmode ? "Night" : "Day"}</h2>
        <button onClick={() => setDarkmode((darkmode) => !darkmode)}>
          change to {darkmode ? "Day" : "Night"}
        </button>
      </div>
    </section>
  );
};

export default Darkmode;
