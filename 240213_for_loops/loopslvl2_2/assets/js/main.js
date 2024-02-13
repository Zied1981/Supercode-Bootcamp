const loopMe = () => {
  const textInput = Number(document.querySelector("#textfeld").value);
  const loopMeOutput = document.querySelector(".loopoutput");

  loopMeOutput.innerHTML = "L";
  // o muss an 2 stelle also muss (i)bei 1 anfangen//
  for (let i = 1; i <= textInput; i++) {
    loopMeOutput.innerHTML += "o";
    /* loopMeOutput.innerHTML = textInput.length; */
  }

  loopMeOutput.innerHTML += "p";
};
