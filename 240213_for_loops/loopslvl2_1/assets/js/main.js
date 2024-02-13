const imageArray = () => {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      returnArray.push("img_00" + i + ".jpg");
    } else if (i >= 10 && i < 100) {
      returnArray.push("img_0" + i + ".jpg");
    } else {
      returnArray.push("img_" + i + ".jpg");
    }
  }
  console.table(returnArray);
};
imageArray();
