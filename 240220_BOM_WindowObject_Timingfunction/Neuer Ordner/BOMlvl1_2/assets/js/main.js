const button = document.querySelector("#btn");
const Anzeige = document.querySelector(".zeit");
let prozent = 100;
button.addEventListener("click", () => {
  const countDown = () => {
    prozent--;
    Anzeige.innerHTML = prozent + "%";
    if (prozent === 0) {
      clearInterval(zustand);
    }
  };

  let zustand = setInterval(countDown, 1000);
});
