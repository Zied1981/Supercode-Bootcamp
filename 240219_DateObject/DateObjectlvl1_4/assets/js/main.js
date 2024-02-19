function daysInMonth(monat, jahr) {
  return new Date(jahr, monat, 0).getDate();
}
console.log(daysInMonth(1, 2016));
console.log(daysInMonth(2, 2016));
console.log(daysInMonth(2, 2017));
console.log(daysInMonth(12, 2017));
//hier muss ich noch drüberschauen und nachvollziehen!!!!
