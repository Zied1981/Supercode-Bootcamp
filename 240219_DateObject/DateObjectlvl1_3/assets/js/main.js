let date = new Date();
console.log(date);
date.setDate(26);
console.log(date);
date.setMonth(5);
console.log(date);
date.setFullYear(2027);
console.log(date);

date.setDate(date.getDate() + 30); // Set now + 30 days as the new date
console.log(date);

let date1 = new Date();
console.log(date1);
date1.setDate(29);
console.log(date1);
date1.setMonth(10);
console.log(date1);
date1.setFullYear(2123);
console.log(date1);

date1.setDate(date1.getDate() + 30); // Set now + 30 days as the new date
console.log(date1);

document.body.innerHTML += `<p>${date}</p>`;
document.body.innerHTML += `${date1}`;
