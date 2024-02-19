let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
let aktuellTime = new Date();
console.log(aktuellTime);
let jahr = aktuellTime.getFullYear();
console.log(jahr);
let monat = aktuellTime.getMonth();
console.log(monat);
let tag = aktuellTime.getDate();
console.log(tag);
let std = aktuellTime.getHours();
console.log(std);
let minute = aktuellTime.getMinutes();
console.log(minute);
let wochenTagTag = wochenTag[aktuellTime.getDay()];
console.log(aktuellTime.getDay());

console.log(wochenTagTag);

let monatName = monate[aktuellTime.getMonth()];
console.log(monatName);
document.body.innerHTML += `<p>${aktuellTime} </p>`;
document.body.innerHTML += `<p>${jahr} </p>`;
document.body.innerHTML += `<p>${monat} Monat</p>`;
document.body.innerHTML += `<p>${tag} Tag</p>`;
document.body.innerHTML += `<p>${std} Stunden</p>`;
document.body.innerHTML += `<p>${minute} Minute </p>`;
document.body.innerHTML += `<p>${wochenTagTag}  </p>`;
document.body.innerHTML += `<p>${monatName} </p>`;
