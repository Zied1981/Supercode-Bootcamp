const randomFunc = (timePara) => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    setTimeout(() => {
      if (typeof randomNumber === "number") {
        resolve(randomNumber);
      } else {
        reject("number not found");
      }
    }, timePara);
  });
};
Promise.all([randomFunc(2000), randomFunc(2000), randomFunc(2000)])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// das ist mit einem mal promises
/* randomFunc(2000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); */
