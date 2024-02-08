let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];
console.log(languages);

languages.sort();

languages.reverse();

console.log(languages);

const sortierung2 = () => {
  languages.sort().reverse();
  return languages;
};
