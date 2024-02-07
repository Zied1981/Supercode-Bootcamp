const person = ["zied", "khemiri", "nett"];
const friends = ["marco", "imed", "fares "];
const favoriteFood = ["pasta", "burger", "couscous"];

person.push("Micha", "Reazy");
friends.push("icaro", "freddy");
console.log(person);
console.log(friends);

person.pop("reazy");
console.log(person);

friends.pop("freddy");
console.log(friends);

let lastvalue = friends.pop();
