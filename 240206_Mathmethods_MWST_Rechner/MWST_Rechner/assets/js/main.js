function counting(event) {
  event.preventDefault();
  let aufschlag = document.body.querySelector(
    `input[name=aufschlag]:checked`
  ).value;

  let mwst = Number(
    document.body.querySelector(`input[name=mwst]:checked`).value
  );

  let betragEingabe = Number(document.querySelector("#betrag").value);
  let mwstBetrag = document.querySelector(".mwstbetrag").innerText;

  let endBetrag = Number(document.querySelector(".bruttobetrag").innerText);

  let warning = document.querySelector(".error");
  console.log(aufschlag);
  console.log(mwst);
  console.log(betragEingabe);
  console.log(mwstBetrag);
  console.log(endBetrag);

  // wenn die mehrwertsteuer 19% ist und mehrwst aufgeschlagen wird
  //dann muss das istoutput mwstbetrag die betrageingabe * 19%
  //endergebnis betrageingabe +mwstbetrag

  // wenn die mehrwertsteuer 19% ist und mehrwst abgezogen wird
  //dann muss das ist output mwstbetrag die betrageingabe * 19%
  //endergebnis betrageingabe - mwstbetrag

  //wenn der mwstbetrag 7% ist und mwst aufgeschlagen wird
  //dann muss  mwstbetrag die betrageingabe * 7%
  //endergebnis betrageingabe + mwstbetrag

  //wenn der mwstbetrag 7% ist und mwst abgezogen wird
  //dann muss  mwstbetrag die betrageingabe * 7%
  //endergebnis betrageingabe - mwstbetrag

  //

  let ergebnis = betragEingabe * (mwst / 100);
  let ergebnisAbgerundet = ergebnis.toFixed(2);
  console.log(ergebnisAbgerundet);

  if (aufschlag == "netto zu brutto") {
    document.querySelector(".mwstbetrag").innerHTML = ergebnisAbgerundet;

    document.querySelector(".bruttobetrag").innerHTML = (
      betragEingabe + ergebnisAbgerundet
    ).toFixed(2);
  } else if (aufschlag === "brutto zu netto") {
    document.querySelector(".bruttobetrag").innerHTML = (
      betragEingabe -
      ergebnisAbgerundet / 1.19
    ).toFixed(2);
    document.querySelector(".mwstbetrag").innerHTML = (
      ergebnisAbgerundet / 1.19
    ).toFixed(2);
  }
}
