const text = "Sam is going to codingschool";
let result = text.replace("codingschool", "school").toUpperCase();
console.log(result);

let result1 = text.replace("codingschool", "school").toLowerCase();
console.log(result1);
/* 
let result3 = text
  .indexOf(0, 2)
  .toUpperCase()
  .text.indexOf(4, 14)
  .text.slice(text.indexOf(text))
  .toUpperCase();
console.log(result3);
 */

let result30 = result.slice(0, 4).toUpperCase();
let result31 = result1.slice(4, 16).toLowerCase();
let result32 = result.slice(16, 22).toUpperCase();
let finalResult = result30 + result31 + result32;
console.log(finalResult);

let result40 = result.slice(0, 4).toLowerCase();
let result41 = result1.slice(4, 16).toUpperCase();
let result42 = result.slice(16, 22).toLowerCase();
let finalResult2 = result40 + result41 + result42;
console.log(finalResult2);
