//to do;
// inputs definieren;
//outputs : (1)spielerOutput ,(2)pcOutput ,(3)result;
//button: restart game;
// variablen definieren und mit queryselektor ansprechen.

const spielerOutput = document.querySelector(".userauswahl");
const pcOutput = document.querySelector(".pcauswahl");
const ergebnisOutput = document.querySelector(".ergebnis");

const rundenOutput = document.querySelector(".rounds");

const myWinOutput = document.querySelector(".mywin");
const pcWinOutput = document.querySelector(".pcwin");
let roundVAR = 0;
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
  //die runden sollen aufgezählt werden.
  roundVAR++;
  //die runden sollen ins html gezeigt werden.
  rundenOutput.innerHTML = "Round : " + roundVAR;

  console.log(pcAuswahl);

  if (pcAuswahl === 1) {
    pcAuswahl = "rock";
    pcOutput.innerHTML = pcAuswahl;
  } else if (pcAuswahl === 2) {
    pcAuswahl = "paper";
    pcOutput.innerHTML = pcAuswahl;
  } else {
    pcAuswahl = "scissors";
    pcOutput.innerHTML = pcAuswahl;
  }
  //::::::::://
  if (meineAuswahl === pcAuswahl) {
    result = "draw";
  } else if (
    (meineAuswahl === "rock" && pcAuswahl === "paper") ||
    (meineAuswahl === "paper" && pcAuswahl === "scissors") ||
    (meineAuswahl === "scissors" && pcAuswahl === "rock")
  ) {
    result = "You loose";
    pcScore++;
    pcWinOutput.innerHTML = "Pc score : " + pcScore;
  } else if (
    (meineAuswahl === "paper" && pcAuswahl === "rock") ||
    (meineAuswahl === "scissors" && pcAuswahl === "paper") ||
    (meineAuswahl === "rock" && pcAuswahl === "scissors")
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
  pcOutput.innerHTML = " PC choose: " + pcAuswahl;
  spielerOutput.innerHTML = "You choose: " + meineAuswahl;
  ergebnisOutput.innerHTML = "Result: " + result;

  console.log(spielerOutput);
  console.log(pcOutput);
  console.log(ergebnisOutput);
}
