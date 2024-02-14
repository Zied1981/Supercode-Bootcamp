const changeGray = document.querySelector("#grauTaste");
const changeWhite = document.querySelector("#weissTaste");
const changeBlue = document.querySelector("#blauTaste");
const changeYellow = document.querySelector("#gelbTaste");
/* const bodyColor = document.querySelector("body"); */
changeGray.addEventListener("click", () => {
  document.body.style.backgroundColor = "gray";
});
changeWhite.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
changeBlue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
changeYellow.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});
