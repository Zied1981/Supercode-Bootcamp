const selectInput = document.querySelector("#select-input");
const selectOutPut = document.querySelector("#select-output");
selectInput.addEventListener("change", () => {
  selectOutPut.innerHTML = selectInput.value;
});
