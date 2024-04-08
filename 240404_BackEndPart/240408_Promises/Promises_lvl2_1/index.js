const promiseRandomNumber = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber < 6) {
      reject(randomNumber);
    } else {
      resolve(randomNumber);
    }
  });
};
promiseRandomNumber()
  .then((result) => {
    console.log(`resolved:${result}`);
  })
  .catch((result) => {
    console.log(`rejected:${result}`);
  });
