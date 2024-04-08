const doubleNumber = (number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 2000);
  });
};

doubleNumber(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
