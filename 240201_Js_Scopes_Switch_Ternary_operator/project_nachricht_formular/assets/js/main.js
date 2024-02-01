function writingText(event) {
  event.preventDefault();
  let textInput = document.body.querySelector("#text").value;

  let textOutPut = document.body.querySelector(".output");

  let error = document.body.querySelector("h6");
  error.style.color = "red";

  textInput.length > 0
    ? (textOutPut.innerHTML = textInput)
    : (error.innerHTML = "bitte geben Sie eine Nachricht ein ?");
}
