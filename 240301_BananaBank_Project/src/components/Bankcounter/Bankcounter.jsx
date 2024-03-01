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
  // func substraieren :wenn der amount beim abziehen kleiner oder gleich der balance.
  const sub = () => {
    amount <= balance
      ? setBalance(Number(balance - amount))
      : window.alert("amount to be surrended ist bigger than your balance ");

    SetAmount("");
  };

  return (
    <section className="counter">
      <h1>Blue Banana Bank</h1>
      <h3>Mein Girokonto</h3>
      <div>
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

/* const node = document.createElement('p');
  const textnode = document.createTextNode(
    'Sie haben nicht genug Geld auf dem Konto'
  );
  const moneyAlert = node.appendChild(textnode);
const geldAuszahlen = () => {
    balance < amount
      ? // ? window.alert('Sie haben nicht genug Geld auf dem Konto')
        document.getElementById('1').appendChild(moneyAlert)
      : setBalance(Number(balance - amount));
    setAmount('');
  }; */
