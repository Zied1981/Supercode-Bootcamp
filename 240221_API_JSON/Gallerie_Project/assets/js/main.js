fetch("https://picsum.photos/v2/list")
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
  .catch((error) => {
    "fehler", error;
  });
