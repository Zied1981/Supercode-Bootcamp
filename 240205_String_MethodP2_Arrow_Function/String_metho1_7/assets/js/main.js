const text = "Sam is good at codingschool";

let result = text.replace("good", "bad").replace("codingschool", "school");
console.log(result);

let result1 = text.replace("Sam", "Susi").replace("codingschool", "school");
console.log(result1);

let result2 = text.replace("codingschool", "tennis");
console.log(result2);

document.write(result + " ");
document.write(result1 + " ");
document.write(result2 + " ");
