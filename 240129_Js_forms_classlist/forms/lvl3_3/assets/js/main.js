function changebackground() {
  const redClr = document.querySelector("#red").value;
  const greenClr = document.querySelector("#green").value;
  const blueClr = document.querySelector("#blue").value;
  const background = document.querySelector("body");
  background.style.backgroundColor =
    "rgb(" + redClr + "," + greenClr + "," + blueClr + ")";
}
