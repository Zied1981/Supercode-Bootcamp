let date1 = new Date();
console.log(date1);

let date2 = new Date("September 2, 2019 09:00:00");
console.log(date2);
let date3 = new Date(0);
console.log(date3);
let date4 = new Date(31556908800);
console.log(date4);
let date5 = new Date(86400000);
console.log(date5);
document.body.innerHTML += `<p>${date2} =  new Date("September 2, 2019 09:00:00")</p>`;
document.body.innerHTML += `<p>${date3} = new Date(0)</p>`;
document.body.innerHTML += `<p>${date4} = new Date(31556908800)</p>`;
document.body.innerHTML += `<p>${date5} = new Date(86400000)</p>`;
