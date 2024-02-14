const selectColor = document.querySelector("#farbeAuswahlen");
const removeBtn = document.querySelector("#button");
let Index = 0;
selectColor.addEventListener("change", () => {
  Index = selectColor.selectedIndex;
});

removeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  selectColor.remove(Index);
});
