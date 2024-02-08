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

drinks.forEach((elemente) => {
  drinks.sort();
  document.write("<br>" + drinks);
  return elemente;
});
console.log(drinks);

drinks.sort().forEach((elt) => document.write(elt + "<br>"));

//Micha lösung!!!

const myDrinks = (list) => {
  list.forEach((drink) => {
    console.log(drink);
    document.body.innerHTML += `${drink}<br>`;
  });
};
console.log(myDrinks(drinks));
