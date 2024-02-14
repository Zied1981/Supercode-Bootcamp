const changeColor = () => {
  const clickMe = document.querySelectorAll(".card");
  clickMe.forEach((singleCard) => {
    singleCard.addEventListener("click", () => {
      singleCard.style.backgroundColor = "black";
      singleCard.style.color = "white";
    });
  });
};
changeColor();
