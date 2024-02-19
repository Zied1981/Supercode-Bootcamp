const weekDay = (a) => {
  let date = new Date(a);

  if (date.getDay() === 6 || date.getDay() === 0) {
    return "weekend";
  } else {
    return "workday";
  }
};
console.log(weekDay("12.15.2019"));
console.log(weekDay("2.16.2001"));
console.log(weekDay("2.1.2020"));
console.log(weekDay("2.29.2020"));
