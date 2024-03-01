import { useState } from "react";
import "./Bankcounter.css";

const Bankcounter = () => {
  //imput einzahlbetrag;
  const [amount, SetAmount] = useState("");

  //kontostand
  const [balance, setBalance] = useState("");
  // für die warnung
  const [warning, setWarning] = useState("");

  //func addieren
  const add = () => {
    setWarning("");
    if (amount < 0) {
      setBalance(Number(balance + amount * -1));
    } else {
      setBalance(Number(balance + amount));
    }

    /*   setBalance(Number(amount + balance)); */
    console.log("yay");
    SetAmount("");
  };
  // func substraieren :wenn der amount beim abziehen kleiner oder gleich der balance.
  const sub = () => {
    setWarning("");
    if (amount === 0 || amount.length === 0) {
      setWarning("https://avatarfiles.alphacoders.com/217/217447.jpg");
      return;
    }
    console.log("test");

    if (amount < 0) {
      setBalance(Number(balance - amount * -1));
    } else {
      setBalance(Number(balance - amount));
    }

    amount <= balance
      ? setBalance(Number(balance - amount))
      : /* window.alert("amount to be surrended ist bigger than your balance "); */
        setWarning("https://avatarfiles.alphacoders.com/217/217447.jpg");

    SetAmount("");
  };

  return (
    <section className="counter">
      <h1>Blue Banana Bank</h1>
      <h3>MY GiROKONTO</h3>
      <p className="output">{balance}</p>
      <img src={warning}></img>

      <input
        type="number"
        placeholder=" Amount in € "
        id="number"
        min="0"
        value={amount}
        onChange={(event) => SetAmount(Number(event.target.value))}
      />

      <div className="btn">
        <button onClick={add}>Deposit</button>
        <button onClick={sub}>Payoff</button>
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
