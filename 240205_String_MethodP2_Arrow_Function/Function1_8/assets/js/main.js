const alter = (yearborn) => {
  let age = 2024 - yearborn;
  return age;
};

console.log(alter(1981));
let myAge = alter(1981);

const differenzAlter = (myAge, age2) => {
  let alterDiff;
  if (myAge > age2) {
    alterDiff = myAge - age2;
  } else {
    alterDiff = age2 - myAge;
  }

  return alterDiff;
};

console.log(differenzAlter(myAge, 10));
