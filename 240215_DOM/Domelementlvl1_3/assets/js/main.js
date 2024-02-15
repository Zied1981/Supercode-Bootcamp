/* const firstElement = document.body.children[1].firstElementChild;
const lastElement = document.body.children[1].lastElementChild;
const firstElementChild = document.body.;
const lastElementChild = document.querySelectorAll("button");

firstElement.addEventListener("click", () => {
  checkItem("firstElement");
});
console.log(firstElement);

const checkItem = (clickedelement) => {
  console.log(clickedelement);
}; */
const btnListItem = document.querySelectorAll("button");

btnListItem[0].addEventListener("click", () => {
  console.log();

  document.querySelector("output").innerHTML =
    document.body.children[0].firstElementChild.innerText;
});
btnListItem[1].addEventListener("click", () => {
  document.querySelector("output").innerHTML =
    document.body.children[0].lastElementChild.innerText;
});
btnListItem[2].addEventListener("click", () => {
  document.querySelector("output").innerHTML =
    document.body.children[0].firstElementChild.nextElementSibling.innerText;
});
btnListItem[3].addEventListener("click", () => {
  document.querySelector("output").innerHTML =
    document.body.children[0].lastElementChild.previousElementSibling.innerText;
});
