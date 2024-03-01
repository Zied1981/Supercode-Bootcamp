import { useState } from "react";
import "./Bankcounter.css";
const Bankcounter = () => {
  //imput einzahlbetrag;
  const [amount, SetAmount] = useState("");
  //kontostand
  const [balance, setBalance] = useState("");
  //func addieren
  const add = () => {
    setBalance(Number(amount + balance));
    console.log("yay");
    SetAmount("");
  };
  // func substraieren
  const sub = () => {
    amount <= balance
      ? setBalance(Number(balance - amount))
      : window.alert("amount to be surrended ist bigger than your balance ");
    SetAmount("");
  };

  return (
    <section className="counter">
      <h1>Blue Banana Bank</h1>
      <div>
        <h3>Mein Girokonto</h3>
        <p className="output">{balance}</p>

        <input
          type="number"
          placeholder=" Betrag in € "
          id="number"
          onChange={(event) => SetAmount(Number(event.target.value))}
          value={amount}
        />

        <br />
        <div className="btn">
          <button onClick={add}>Einzahlen</button>
          <button onClick={sub}>Auszahlen</button>
        </div>
      </div>
    </section>
  );
};

export default Bankcounter;
