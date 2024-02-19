//hiermit erstelln wir ein objekt mit dem datum 1999......
const date1 = new Date(1999, 10, 5, 15); //PM
const date2 = new Date();
const date3 = new Date(2019, 12, 3, 12); //PM
const date4 = new Date(2000, 1, 1, 11); //AM

const time = (input) => {
  let hours = input.getHours();
  return hours >= 12 ? "PM" : "AM";
};

//hier rufen wir die func auf und übergeben wir date1,date2 usw..
console.log(time(date1));
console.log(time(date2));
console.log(time(date3));
console.log(time(date4));

console.log(date1);
