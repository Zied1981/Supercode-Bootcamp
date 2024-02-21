fetch("https://picsum.photos/v2/list")
  /* fetch("https://picsum.photos/v2/list?page=4&limit=40") */
  .then((response) => response.json())
  .then((newArray) => {
    console.log(newArray);

    newArray.forEach((element) => {
      let contentBox = document.createElement("div");

      let image = document.createElement("img");
      image.setAttribute("src", element.download_url);
      contentBox.appendChild(image);

      let person = document.createElement("h3");
      person.textContent = element.author;
      contentBox.appendChild(person);

      let btn = document.createElement("button");
      btn.textContent = "See More";
      contentBox.appendChild(btn);
      btn.addEventListener("click", () => window.open(element.url));

      document.querySelector(".result").appendChild(contentBox);
    });
  })
  .catch((error) => console.log("fehler"));

/* 





  let grid = document.querySelector(".picsum_grid");
let refreshBtn = document.querySelector("#refresh");
let number = 1;

let fetchFunction = () => {
  fetch(https://picsum.photos/v2/list?page=${number}&limit=100)
    .then((response) => response.json())
    .then((picsumData) => {
      let result = picsumData
        .map((singleImg) => {
          return <div> 
        <img src="${singleImg.download_url}" alt="Picsum Img">
        <h2>${singleImg.author} </h2>
        <a href="${singleImg.url}">See more</a>
        </div>
        ;
        })
        .join("");
      grid.innerHTML = result;
    })
    .catch((error) => console.log("ein Fehler ist aufgetreten", error));
};
fetchFunction();

refreshBtn.addEventListener("click", () => {
  number++;
  fetchFunction();
});

 */
