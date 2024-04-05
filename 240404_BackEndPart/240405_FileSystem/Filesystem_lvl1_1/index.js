const fs = require("fs");
const newtxt = "im a web dev hero";
//greift auf dem file(erster wert pfad, 2er kontent)

fs.writeFile("./blog1.txt", newtxt, (err) => {
  if (err) {
    console.log(err);
  } else {
    /* console.log("writing file done"); */
  }
});

fs.writeFile("./blog2.txt", "ich bin ein DEV", (err) => {
  if (err) {
    console.log(err);
  } else {
    /* console.log("File already created"); */
  }
});

const folderName = "./assets";
//überprüfen ob ornder exist falls ja dann löschen
if (fs.existsSync(folderName)) {
  console.log("folder exist");
  fs.rmdir(folderName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder already removed");
    }
  });
} else {
  console.log("folder dont exist");
}

const deletetxt = "./delete.txt";
if (fs.existsSync(deletetxt)) {
  fs.unlink(deletetxt, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("text already deleted");
    }
  });
} else {
  console.log("deletetxt not found");
}

fs.writeFile(deletetxt, "delete meee", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("delet txt created");
  }
});

const hellotxt = "./Hello.txt";

fs.writeFile(hellotxt, "hallihallo", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("hello txt created");
  }
});

fs.rename(hellotxt, "HelloWorld.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("hellotxt in Hellowordl.txt renamed");
  }
});
