let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];
console.log(album);
const albumXX = album.map((elemente) => {
  let neueElemente = elemente.toLowerCase();
  if (neueElemente.includes(".")) {
    return neueElemente.slice(0, neueElemente.indexOf("."));
  } else {
    return (neueElemente = "invalid");
  }
});
console.log(albumXX);
