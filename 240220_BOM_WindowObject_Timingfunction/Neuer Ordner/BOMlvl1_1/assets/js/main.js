console.log("start:warten für 3 sekunden");
const textAnzeige = () => {
  console.log("erledigt.du hast 3 sekunden verschwendet");
};
setTimeout(textAnzeige, 3000);

let zahl = 11;
const countDown = () => {
  if (zahl > 0) {
    zahl--;
    console.log(zahl);
  } else if (zahl === 1) {
    console.log("endlich FA!!!");
  } else if (zahl === -1) {
    clearInterval(timer);
  }
};

let timer = setInterval(countDown, 1000);
//muss geklärt werden???????
