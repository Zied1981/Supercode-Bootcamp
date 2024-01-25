let a = 12;
let b = a * 3;
console.log(b);

console.log("Hello World");

let firstName = "Anton";
console.log(firstName);

let age = 28;
console.log(age);

let job = "Trainer:in";
console.log(job);

let married = "true";
console.log(married);

console.log(
  firstName +
    " ist " +
    age +
    " Jahre alt " +
    " von Beruf " +
    job +
    " und " +
    " ist " +
    "verheiratet:" +
    married
);

document.querySelector("#output").innerHTML = b;
document.write("<h2>" + b + "</h2>");
