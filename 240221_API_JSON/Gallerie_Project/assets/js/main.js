//über das gesamte json fetchen.
fetch("https://picsum.photos/v2/list")
  /* fetch("https://picsum.photos/v2/list?page=4&limit=40") */

  //checken ob das Fetchen laüft.
  .then((response) => response.json())
  .then((newArray) => {
    console.log(newArray);
    //über die items im fetch iterieren mit forEach

    newArray.forEach((element) => {
      //die div kreieien in der kommt alles was wir brauchen( img/h3/button)
      let contentBox = document.createElement("div");

      // hier wird das img kreeieert ,gesettet mit set Attribute und mit appendchild in die div hinzugefügt.
      let image = document.createElement("img");
      image.setAttribute("src", element.download_url);
      contentBox.appendChild(image);

      //hier wird der autohor kreeiert und aus json ins html(div) geladen
      let person = document.createElement("h3");
      person.textContent = element.author;
      contentBox.appendChild(person);

      //hier wird der button kreeiert und mit appendchild ins html +
      //ein eventlistener mit click für die weiterleitung auf die nächste seite(key url bei unseren json)
      let btn = document.createElement("button");
      btn.textContent = "See More";
      contentBox.appendChild(btn);
      btn.addEventListener("click", () => window.open(element.url));

      //hier wird die kreeierte box ins html geladen.
      document.querySelector(".result").appendChild(contentBox);
    });
  })
  .catch((error) => console.log("fehler", error));

/* !!!!!!!!!!!!!!!!!!! */
/* !!!!!!!!!!!!!!!!!!! */
/* !!!!!!!!!!!!!!!!!!! */
/* !!!!!!!!!!!!!!!!!!! */
/* !!!!!!!!!!!!!!!!!!! */

// 2te: (variante)

//mann kann alles in einer func packen , ein refresh button  erstellen
//und dann die func aufrufen und anschliessend den eventlistener auf den button die func übergeben.

/*   let grid = document.querySelector(".picsum_grid");
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
