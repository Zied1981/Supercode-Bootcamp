let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
console.log(fahrenheit);

const umrechnung = fahrenheit.map((werte) => {
  let neueWerte = Math.round((werte - 32) / 1.8);
  return neueWerte;
});
console.log(umrechnung);
