function getInputValue(event) {
  event.preventDefault();

  const age1 = document.querySelector("#age1").value;
  const age2 = document.querySelector("#age2").value;
  let ergebnisFinal = age1 - age2;
  console.log(ergebnisFinal);
  const ziedVar = document.querySelector("p");
  ziedVar.innerHTML = "Die differenz ist " + ergebnisFinal;
}
