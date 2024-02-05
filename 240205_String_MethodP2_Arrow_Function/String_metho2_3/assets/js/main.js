function changeColor() {
  const change = document.body.querySelector("#search-input").value;
  const wordSearch = document.body.querySelector("article").innerText;
  //mit replaceALL suche ich mein text input im search feld und ersetze es mit 2 wert: klasse highlight also color yellow;
  const xxx = wordSearch.replaceAll(
    change,
    (document.innerHTML = `<span class= highlight> ${change} </span>`)
  );
  //hiermit greife ich auf den inhalt der html vom text.
  document.querySelector("article").innerHTML = xxx;
}
