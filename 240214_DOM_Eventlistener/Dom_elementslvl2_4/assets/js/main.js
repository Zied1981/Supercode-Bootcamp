const selectColor = document.querySelector("#farbeAuswahlen");
const removeBtn = document.querySelector("#button");

/* selectColor.addEventListener("change", () => {
    console.log(index);
}); */

removeBtn.addEventListener("click", () => {
  //damit lass ich auslesen was der user ausgesucht hat.
  const index = selectColor.selectedIndex;

  //damit erstelle ich ein virtuelles array aus select-list- elemente
  const options = selectColor.options;

  console.log(options);
  // hiermit lesen wir den inhalt von den options aus.
  const indexVar = options[index].text;
  // damit löschen wirf den leerzeichen von html colors
  const finishColor = indexVar.replace(" ", "");
  //hiermit wird die farbe dem body zugewiesen.
  document.body.style.backgroundColor = finishColor;
});

// ! Variante 2

//- const colorChangeButton = document.querySelector("#button"); <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-- Variable mit dem Button verbinden

//- colorChangeButton.addEventListener("click", () => {<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-- auf den Button ein click EventListener
//- const colorSelect = document.querySelector("#farbeAuswahlen").value;<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-- Variable die , die farben als value ausliest
//- document.querySelector("body").style.backgroundColor = colorSelect.replace(" ", "").toLowerCase();<<-- den body gestyled mit der variable die, die farben als value enthält und nurnoch den text bearbeitet. zB. mit replace die spaces entfert
//- });

// ##########################################################################

// ##########################################################################

// ! Variante 3

//?  const colorChangeButton = document.querySelector("#button");

//? const bgColorSwitch = () => {
//?   const colorSelection = document.querySelector("#farbeAuswahlen").selectedIndex;

//?   const selectedColor = document.querySelector("#farbeAuswahlen")[colorSelection].innerText;
//?   const deleteSpace = selectedColor.replace(" ", "");
//?   document.body.style.backgroundColor = deleteSpace;
//? };

//? button.addEventListener("click", bgColorSwitch);
