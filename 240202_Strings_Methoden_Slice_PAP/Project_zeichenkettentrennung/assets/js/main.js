function checking() {
  const textInput = document.body.querySelector("#text-input").value;
  const cutInput = document.body.querySelector("#cut-input").value;
  const cutEingabe = document.body.querySelector(
    'input[name="cuting"]:checked'
  ).value;
  let frontOutput = document.body.querySelector(".frontoutput");
  const backOutput = document.body.querySelector(".backoutput");
  const warning = document.body.querySelector(".error");

  //variante 1
  //wenn die abfrage mit html required gelöst werden soll.
  /*  if (cutEingabe === "davor") {
    let cuttedText = textInput.slice(0, textInput.indexOf(cutInput));
    let backCuttedText = textInput.slice(textInput.indexOf(cutInput));

    frontOutput.innerHTML = cuttedText;
    backOutput.innerHTML = backCuttedText;
  } else {
    let cuttedText = textInput.slice(0, textInput.indexOf(cutInput) + 1);
    let backCuttedText = textInput.slice(textInput.indexOf(cutInput) + 1);

    frontOutput.innerHTML = cuttedText;
    backOutput.innerHTML = backCuttedText;
} */

  // wenn wir ein warning erscheinen soll wenn der user nichts eingibt oder etwas falsch eingibt!!!!
  //variante 2
  if (textInput.length > 0 && cutInput.length > 0) {
    if (cutEingabe === "davor") {
      let cuttedText = textInput.slice(0, textInput.indexOf(cutInput));
      let backCuttedText = textInput.slice(textInput.indexOf(cutInput));

      frontOutput.innerHTML = cuttedText;
      backOutput.innerHTML = backCuttedText;
    } else {
      let cuttedText = textInput.slice(0, textInput.indexOf(cutInput) + 1);
      let backCuttedText = textInput.slice(textInput.indexOf(cutInput) + 1);

      frontOutput.innerHTML = cuttedText;
      backOutput.innerHTML = backCuttedText;
    }

    /*    const indexSliceVar = textInput.indexOf(cutInput);
    if (indexSliceVar === -1) {
      indexSliceVar.innerHTML = "bitte geben sie ien gültiges zeichen an";
    } */
  } else {
    warning.innerHTML = "Bitte geben Sie was ein !!!";
  }
}

/* if ((textInput.length = 0)) {
  warning.innerHTML = "Bitte geben Sie eine zeichenkette an";
} else if ((cutInput.length = 0)) {
  warning.innerHTML = "Bitte geben Sie einen trenner an";
} */
