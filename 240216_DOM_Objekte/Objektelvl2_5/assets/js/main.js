const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const searchBtn = document.querySelector("button");

const tableContainerOutput = document.querySelector("#table-container");
// parameter steht für unsere Array singers//
function myFunction(parameter) {
  //variable definieren//

  let tabelle = `  
  <table>


    <thead>
       <tr>
         <th>Name</th>
         <th>County</th>
         <th>Period Active</th>
         <th>Genre</th>
     </tr>
   </thead>


   
   <tbody>`;
  parameter.forEach((reihe) => {
    tabelle += `
                <tr>
                    <td>${reihe.name}</td>
                    <td>${reihe.country}</td>
                    <td>${reihe.period_active.start} - ${reihe.period_active.end}</td>
                    <td>${reihe.genre}</td>
                </tr>
                `;
  });

  tabelle += ` </tbody>
  </table> `;
  return tabelle;
}
tableContainerOutput.innerHTML = myFunction(singers);

//das folgende nennt man :event handler function.
const handleSearchClicked = () => {
  /*   tableContainerOutput.innerHTML = ""; */
  let textInput = document.querySelector("#searchInput").value.toLowerCase();
  //   console.log(textInput);

  let filterResult = singers.filter((objectItems) => {
    /*  console.log(objectItems.name.toLowerCase()); */

    return objectItems.name.toLowerCase().includes(textInput);
  });
  console.log(filterResult);
  tableContainerOutput.innerHTML = myFunction(filterResult);
};

searchBtn.addEventListener("click", handleSearchClicked);
// hiermit regesriere ich dem eventlistener auf dem Btn.
//das folgende nennt man : event listener;
