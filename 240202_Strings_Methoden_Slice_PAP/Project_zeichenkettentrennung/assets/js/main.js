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
    if (textInput.includes(cutInput)) {
      if (cutEingabe === "davor") {
        let cuttedText = textInput.slice(0, textInput.indexOf(cutInput));
        let backCuttedText = textInput.slice(textInput.indexOf(cutInput));

        frontOutput.innerHTML = cuttedText;
        backOutput.innerHTML = backCuttedText;
        warning.innerHTML = "";
      } else {
        let cuttedText = textInput.slice(0, textInput.indexOf(cutInput) + 1);
        let backCuttedText = textInput.slice(textInput.indexOf(cutInput) + 1);

        frontOutput.innerHTML = cuttedText;
        backOutput.innerHTML = backCuttedText;
        warning.innerHTML = "";
      }
    } else {
      warning.innerHTML = "Bitte geben Sie ein gültiges Trennzeichen an";
    }
  } else {
    warning.innerHTML = "Bitte geben sie ein Zeichen an!!";
  }
}
