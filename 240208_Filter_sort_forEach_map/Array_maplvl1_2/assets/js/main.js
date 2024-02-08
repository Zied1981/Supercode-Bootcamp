const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];
console.log(drinks);

let upperdrinks = drinks.map((elemente) => {
  return elemente.toUpperCase();
});

console.log(upperdrinks);

// Arrow function mit map()und toUpperCase();
const upperUpperdrinks = drinks.map((parameter) => parameter.toUpperCase());
console.log(upperUpperdrinks);
