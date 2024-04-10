const fs = require("fs");
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, dataBuffer) => {
      if (err) return reject(err);
      resolve(dataBuffer);
    });
  });
};
module.exports = { readFile };
