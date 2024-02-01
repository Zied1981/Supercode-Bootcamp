function checkAge() {
  const userAge = Number(document.querySelector("#age").value);
  const status = document.querySelector("p");

  /*  if (userAge < 18) {
    console.log("under 18");
    status.innerHTML = "under 18";
  } else {
    console.log("over 18");
    status.innerHTML = "over 18";
  } */

  userAge >= 18
    ? (status.innerHTML = "volljährig")
    : (status.innerHTML = "minderjährig");
}
