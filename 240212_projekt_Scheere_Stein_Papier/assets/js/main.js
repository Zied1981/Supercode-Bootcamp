//to do;
// inputs definieren;
//outputs : (1)spilerOutput ,(2)pcOutput ,(3)result;
//button: restart game;
// variablen definieren und mit queryselektor ansprechen.

const spielerOutput = document.querySelector(".userauswahl");
const pcOutput = document.querySelector(".pcauswahl");
const ergebnisOutput = document.querySelector(".ergebnis");
const rundenOutput = document.querySelector(".rounds");
let roundVAR = 0;
const myWinOutput = document.querySelector(".mywin");
const pcWinOutput = document.querySelector(".pcwin");
let myScore = 0;
let pcScore = 0;

/* console.log(spielerOutput);
console.log(pcOutput);
console.log(ergebnisOutput); */

// function formulieren:

function myplay(meineAuswahl) {
  // wenn pcAuswahl 1-------> stein
  //wenn pcAuswahl  2-------> papier
  //wenn  pcAuswahl 3----->scheere
  // pc soll eine random nummer bis 3;
  let pcAuswahl = Math.ceil(Math.random() * 3);
  let result = "";
  roundVAR++;
  rundenOutput.innerHTML = "Round : " + roundVAR;

  console.log(pcAuswahl);

  if (pcAuswahl === 1) {
    pcAuswahl = "stein";
    pcOutput.innerHTML = pcAuswahl;
  } else if (pcAuswahl === 2) {
    pcAuswahl = "papier";
    pcOutput.innerHTML = pcAuswahl;
  } else {
    pcAuswahl = "scheere";
    pcOutput.innerHTML = pcAuswahl;
  }

  if (meineAuswahl === pcAuswahl) {
    result = "Draw";
  } else if (
    (meineAuswahl === "stein" && pcAuswahl === "papier") ||
    (meineAuswahl === "papier" && pcAuswahl === "scheere") ||
    (meineAuswahl === "scheere" && pcAuswahl === "stein")
  ) {
    result = "You loose";
    pcScore++;
    pcWinOutput.innerHTML = "Pc score : " + pcScore;
  } else if (
    (meineAuswahl === "papier" && pcAuswahl === "stein") ||
    (meineAuswahl === "scheere" && pcAuswahl === "papier") ||
    (meineAuswahl === "stein" && pcAuswahl === "scheere")
  ) {
    result = "You Win";
    myScore++;
    myWinOutput.innerHTML = "My score : " + myScore;
  } else {
    result = "not found";
  }
  /*   if (pcAuswahl === 1) {
    pcAuswahl.innerHTML = "stein";
  } else if (pcAuswahl === 2) {
    pcAuswahl.innerHTML = "papier";
  } else {
    pcAuswahl.innerHTML = "scheere";
  } */
  pcOutput.innerHTML = " Pc choose  : " + pcAuswahl;
  spielerOutput.innerHTML = "You choose: " + meineAuswahl;
  ergebnisOutput.innerHTML = "Result:" + result;

  console.log(spielerOutput);
  console.log(pcOutput);
  console.log(ergebnisOutput);
}
