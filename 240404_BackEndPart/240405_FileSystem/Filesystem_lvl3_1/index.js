const fs = require("fs");

//abfragen ob folder exist wenn ja dann already
//exist wenn nein dann erstellen mit mkdir

if (fs.existsSync("folder")) {
  console.log("folder alredy exist");
} else {
  fs.mkdir("folder", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created");
    }
  });
}

const func = (para) => {
  //ob der txt exist wenn ja dann den text appenden mit parameter
  if (fs.existsSync("folder/text.txt")) {
    fs.appendFile("folder/text.txt", `${para}\n`, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("text created");
      }
    });
    //wenn nicht dann schreib den txt mit parameter.
  } else {
    fs.writeFile("folder/text.txt", `${para}\n`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file created");
      }
    });
  }
};
func("hallo fish");
