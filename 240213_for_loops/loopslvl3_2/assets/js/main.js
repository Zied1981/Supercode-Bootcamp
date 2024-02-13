let numArr = [5, 22, 15, 100, 55];
const ergebnis = document.querySelector(".output");
// aussere for loop fürs array.
//zeile(8) for loop für die innere prüfung.
//zeile (9) wenn die numArr modulo (j)===o heisst das die zahl teilbar
// ist und das wird wirder ins html ausgegeben.

for (let i = 0; i < numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j === 0) {
      ergebnis.innerHTML += `<p>${
        numArr[i]
      } is devidable by ${j} .The result is: ${numArr[i] / j} </p>`;
    }
  }
}
