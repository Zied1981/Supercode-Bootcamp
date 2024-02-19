let list = [
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
console.log(list);

function monthName(param) {
  let date = new Date(param);
  /*  console.log(date); */

  let nameOfMonth = date.getMonth();
  /* console.log(nameOfMonth); */

  return list[nameOfMonth];
}
console.log(monthName("2001-3-4"));
console.log(monthName("2019-12-24"));
console.log(monthName("1410-07-15"));
