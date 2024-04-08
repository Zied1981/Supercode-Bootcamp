const multiplyNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (typeof number === "number") {
      resolve(number * number);
    } else reject("error", error);
  });
};

const finalNumber = (number) => {
  multiplyNumber(number)
    .then((result) => {
      console.log(result);
      return multiplyNumber(result);
    })
    .then((result) => {
      console.log(result);
      return console.log(multiplyNumber(result));
    })

    .catch((error) => {
      console.log(`fehler: ${error}`);
    });
};
finalNumber(5);
