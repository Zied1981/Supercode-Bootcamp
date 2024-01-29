function getInputValue(event) {
  event.preventDefault();

  const birthYear = document.querySelector("#byear").value;
  const ergebnis = 2024 - birthYear;
  console.log(ergebnis);
  const ziedVar = document.querySelector("h3");
  ziedVar.innerHTML = ergebnis;
}
