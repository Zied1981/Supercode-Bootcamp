//to do
//auslesen von inputs grösse/alter/gewicht/geschlecht
// wert vom dropdownmenü;
// berechung : mann oder frau
//
// Grundumsatz mann // 66.47 + (13.7 * Körpergewicht in kg)+
//  (5 * Körpergröße in cm) – (6.8 * Alter in Jahren) = Grundumsatz

// Grundumsatz frau // 655.1 + (9.6 * Körpergewicht in kg) + (1.8 * Körpergröße in cm)
// – (4.7 * Alter in Jahren) = Grundumsatz

//Gesamtumsatz= grundumsatz * PAL faktor//

const result = (event) => {
  event.preventDefault();
  const size = Number(document.body.querySelector("#körpergrösse").value);
  const age = Number(document.body.querySelector("#alter").value);
  const weight = Number(document.body.querySelector("#gewicht").value);
  const geschlecht = document.body.querySelector(
    `input[name="radio"]:checked`
  ).value;
  const belastung = Number(document.body.querySelector("#belastung").value);
  console.log(size);
  console.log(age);
  console.log(weight);
  console.log(geschlecht);
  console.log(belastung);

  let grundcalOutput = document.body.querySelector(".grund-kcal");
  let grundkjOutput = document.body.querySelector(".grund-kj");
  let gesamtcalOutput = document.body.querySelector(".gesamt-kcal");
  let gesamtkjOutput = document.body.querySelector(".gesamt-kj");

  let ergebnissKcal;
  let ergebniskj;
  let gesamtumsatzkcal;
  let gesamtumsatzkj;

  if (geschlecht === "männlich") {
    ergebnissKcal = 66.47 + 13.7 * weight + 5 * size - 6.8 * age;
    grundcalOutput.innerHTML = ergebnissKcal.toFixed(2);
    console.log(ergebnissKcal);
  } else {
    ergebnissKcal = 655.1 + 9.6 * weight + 1.8 * size - 4.7 * age;
    grundcalOutput.innerHTML = ergebnissKcal.toFixed(2);
  }

  ergebniskj = ergebnissKcal * 4.184;
  grundkjOutput.innerHTML = ergebniskj.toFixed(2);
  console.log(ergebniskj);

  gesamtumsatzkcal = ergebnissKcal * belastung;
  console.log(gesamtumsatzkcal);

  gesamtcalOutput.innerHTML = gesamtumsatzkcal.toFixed(2);

  gesamtumsatzkj = gesamtumsatzkcal * 4.184;
  gesamtkjOutput.innerHTML = gesamtumsatzkj.toFixed(2);
};
