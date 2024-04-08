const filterfunc1 = (arr) => {
  return arr.filter((item) => item.population > 100000);
};
const filterfunc2 = (arr) => {
  return arr.filter((item) => item.population < 100000);
};

export { filterfunc1, filterfunc2 };
