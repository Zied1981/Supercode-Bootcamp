function greaterThan(event) {
  event.preventDefault();
  const userAge = document.getElementById("input").value;
  const status = document.querySelector("p");

  if (userAge >= 18) {
    status.innerHTML = "du kannst rauchen";
    console.log("du kannst  rauchen");
  } else {
    status.innerHTML = "du darfst nicht rauchen";
    console.log("du darfst nicht rauchen");
  }
}
