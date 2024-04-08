const function1 = (arr) => arr[0];
const function2 = (arr) => {
  arr.pop();
  return arr;
};

const function3 = (arr) => {
  return arr.pop();
};

const function4 = (arr) => {
  arr.shift();
  return arr;
};

const function5 = (arr, wordToRemove) => {
  if (!arr.includes(wordToRemove)) {
    return "not found";
  }
  if (arr.includes(wordToRemove)) {
    return arr.filter((item) => item !== wordToRemove);
  } else {
    return arr;
  }
};

const function6 = (arr) => {
  return [...new Set(arr)];
};
const function7 = (arr) => {
  return arr.reduce((acc, curr) => acc + curr);
};

const function8 = (minimum, maximum) => {
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

const function9 = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};
const function10 = (word) => {
  return word.toUpperCase();
};
const function11 = (para1, para2) => {
  if (para1.slice(-1).includes(para2.slice(-1))) {
    return "true";
  } else {
    return "false";
  }
  //oder anstatt includes auch === benutzen kommt aus selbe raus//
};

export {
  function1,
  function2,
  function3,
  function4,
  function5,
  function6,
  function7,
  function8,
  function9,
  function10,
  function11,
};
