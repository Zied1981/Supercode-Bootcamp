const person = {
  name: "Zied",
  alter: 42,
  sagNameAlter: function () {
    alert(person.name + person.alter);
  },
};
console.log(person.name);
console.log(person.alter);

person.sagNameAlter();
