const heros = [
  "Superman",
  "Batman",
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  null,
  10,
];
console.log(heros);

let myHeros = heros.filter((x) => {
  return x;
});

console.log(myHeros);
