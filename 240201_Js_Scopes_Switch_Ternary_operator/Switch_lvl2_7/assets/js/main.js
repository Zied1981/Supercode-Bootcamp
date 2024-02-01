function showtxt() {
  //jetzt value holen.
  let userVal = document.querySelector("#mylist").value;
  //ich konvertiere den string in einer number damit ich den switch string mit dem case 0(number vergeichen kann.)
  const userNum = Number(userVal);

  //jetzt geb ich texte aus.
  let showErgebnis = document.querySelector(".boxMasse");
  /* console.log(showErgebnis); */

  switch (userNum) {
    case 0:
      showErgebnis.innerHTML =
        "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm <br> B: 7 - 12,5 cm <br> H: bis 1 cm";
      break;
    case 1:
      showErgebnis.innerHTML = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm";
      break;

    case 2:
      showErgebnis.innerHTML = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm";
      break;

    case 3:
      showErgebnis.innerHTML =
        "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm";
      break;
    default:
      showErgebnis.innerHTML = "extra grosse Größe DD";
  }
}
