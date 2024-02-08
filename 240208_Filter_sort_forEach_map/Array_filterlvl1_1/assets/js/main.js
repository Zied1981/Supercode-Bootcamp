const woerter = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];
console.log(woerter);

const nameWoerter = woerter.filter((zeichenkette) => {
  return zeichenkette.length <= 6;
});
console.log(nameWoerter);

const Zied = woerter.filter((zeichenkette) => zeichenkette.length <= 6);
console.log(Zied);
