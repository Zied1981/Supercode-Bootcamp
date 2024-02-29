import { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [faq, setFaq] = useState(false);
  console.log(faq);

  return (
    <>
      <section className="container">
        <p>Why is react great?</p>

        <button onClick={() => setFaq((faq) => !faq)}></button>
      </section>

      {faq && (
        <div className="container">
          <p>fast learing courve</p>
        </div>
      )}
    </>
  );
};

export default Faq;
