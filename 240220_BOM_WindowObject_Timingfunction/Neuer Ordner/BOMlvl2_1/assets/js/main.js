const counter = document.querySelector("#count");
const bigDiv = document.querySelector(".message");
let nummer = 10;
const countdown = () => {
  nummer--;
  counter.innerHTML = nummer;
  if (nummer === 0) {
    clearInterval(aktuellNumb);
    bigDiv.style.opacity = 0;
  }
};
let aktuellNumb = setInterval(countdown, 1000);
