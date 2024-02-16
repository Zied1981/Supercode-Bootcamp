let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);

//werte neu zuweisen
unsereHaustiere[0].names = ["susi", "maria"];
console.log(unsereHaustiere[0].names);
