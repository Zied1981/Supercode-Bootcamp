const datumAktuell = () => {
  let date = new Date();
  let aktday = date.getDate();
  let aktMonth = date.getMonth();
  let aktYear = date.getFullYear();
  document.body.innerHTML += `<h2>${aktday}/${aktMonth}/${aktYear}</h2>`;
};
datumAktuell();
