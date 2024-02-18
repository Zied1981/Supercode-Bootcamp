const listOutput = document.querySelector("ul");
const speicherBtn = document.querySelector("#enter");
console.log(listOutput);
console.log(speicherBtn);

speicherBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const textInput = document.querySelector("#userinput").value;
  console.log(textInput);
  listOutput.innerHTML += `<li>${textInput}</li>`;
});
