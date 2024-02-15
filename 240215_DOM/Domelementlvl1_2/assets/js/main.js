/* const myFunction = (event) => {
  event.preventDefault();

  for (let i = 0; i < 3; i++) {
    document.body.children[0].children[i].style.backgroundColor = "black";
    document.body.children[0].children[3].children[0].style.backgroundColor =
      "black";
    document.body.children[0].children[5].style.backgroundColor = "black";
    document.body.children[0].children[5].style.color = "white";

    console.log("hallo");
  }
};
 */
let clickMe = 0;

const myFunction = () => {
  clickMe++;
  const klaasenName = document.getElementsByClassName("example");
  for (let i = 0; i < klaasenName.length; i++) {
    if (clickMe % 2 === 0) {
      klaasenName[i].style.backgroundColor = "black";

      klaasenName[i].style.color = "white";
    } else {
      klaasenName[i].style.backgroundColor = "white";

      klaasenName[i].style.color = "black";
    }
  }
};
