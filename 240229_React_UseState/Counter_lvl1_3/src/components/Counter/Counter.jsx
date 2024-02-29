import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  let [count, setCount] = useState(0);
  count <= 0 ? (count = 0) : (count = count);

  return (
    <section className="counting">
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount("")}>reset</button>
    </section>
  );
};

export default Counter;
