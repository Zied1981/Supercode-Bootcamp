const fs = require("fs");
//import the jason file
const data = require("./data.json");

//convert the json object to string
/* const xxx = JSON.parse(data); */
/* console.log(jsonObject); */
/* console.log(data); */
/* fs.readFile("./data.json", (err, dataX) => {
  if (err) {
    console.log(err);
  } else {
    const xxx = JSON.parse(dataX);
    console.log("data geparsed");
    console.log(xxx);
  }
}); */
console.log(data);

const dateitxt = "./datei.txt";
//abfragen ob daten da sind und überschreiben bzw löschen
try {
  if (fs.existsSync(dateitxt)) {
    fs.unlinkSync(dateitxt);
  }
} catch (err) {
  console.error(err);
}

data.forEach((items) => {
  const output = `${items.id} - ${items.title}\n ${items.description}\n\n`;
  console.log(items.id);
  fs.appendFileSync(dateitxt, output, (err) => {
    if (err) throw err;
    console.log("content created");
  });
});
