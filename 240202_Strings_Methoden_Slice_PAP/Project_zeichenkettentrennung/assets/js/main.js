function checking() {
  const textInput = document.body.querySelector("#text-input").value;
  const cutInput = document.body.querySelector("#cut-input").value;
  const cutEingabe = document.body.querySelector(
    'input[name="cuting"]:checked'
  ).value;
  let frontOutput = document.body.querySelector(".frontoutput");
  const backOutput = document.body.querySelector(".backoutput");
  /*   console.log(textInput);
  console.log(cutInput);
  console.log(cutEingabe);
  console.log(frontOutput);
  console.log(backOutput) */ if (
    textInput.length >= 0 &&
    cutInput.length >= 0
  ) {
    let cuttedText = textInput.slice(0, textInput.indexOf(cutInput));
    frontOutput.innerHTML = cuttedText;
    let backCuttedText = textInput.slice(textInput.indexOf(cutInput));
    backOutput.innerHTML = backCuttedText;
  } else {
    console.log("fisch");
  }
}
