const count = document.getElementById("clickMe");
let counterHigh = 0;

count.addEventListener("click", () => {
  counterHigh++;
  console.log(counterHigh);
  count.innerHTML = "Click me: " + counterHigh;
});
