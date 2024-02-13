const loopMe = () => {
  const textInput = Number(document.querySelector("#textfeld").value);
  const loopMeOutput = document.querySelector(".loopoutput");
  let myArray = [];

  if (textInput === 0) {
    console.log("error");
  } else {
    // o muss an 2 stelle also muss (i)bei 1 anfangen//
    if (textInput % 2 === 0) {
      for (let i = 1; i <= textInput; i++) {
        //in den geschweiften klammken : was soll er machen !!!!
        // loopMeOutput.innerHTML += "o";
        // oder über array dann mit push
        myArray.push("o");
      }
      //wenn ungerade soll
    } else if (textInput % 2 !== 0) {
      for (let j = 0; j < textInput; j++) {
        if (j % 2 !== 0) {
          myArray.push("o");
        } else {
          myArray.push("O");
        }
      }
    }
    loopMeOutput.innerHTML = `L${myArray.join("")}p`;
  }
};

/* const multiplayTheO = () => {
    const inputText = Number(document.querySelector(".input-text").value);
    const outputText = document.querySelector(".output-text");
  
    let abc = "";
    if (inputText % 2 === 0) {
      for (let i = 1; i <= inputText; i++) {
        outputText.innerHTML += "o";
      } // ------------------------------------
    } else if (inputText % 2 !== 0) {
      for (let j = 0; j < inputText; j++) {
        if (j % 2 === 0) {
          abc += "o";
        } else {
          abc += "O";
        }
      }
      // ------------------------------------
    } else if (inputText === 0) {
      outputText.innerHTML += "Error";
    }
  
    console.log(abc);
    outputText.innerHTML = "L" + abc + "p";
  }; */
