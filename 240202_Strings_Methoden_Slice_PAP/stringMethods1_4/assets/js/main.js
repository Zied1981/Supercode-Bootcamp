const A = "Susi is going to codingschool";
console.log(A.slice(0, 4));
console.log(
  A.slice(A.indexOf("is"), A.indexOf("coding")).concat(
    A.slice(A.indexOf("school"))
  )
);
//bei slice ( erster wert inklusiv     // 2wert ist exklusive und schneidet davor ab.  )
//indexOf . gibt den wert des indexes zurück!!!!!!

console.log(A.slice(4));
console.log(A.slice(0, 4));
console.log(A.slice(23, 29));
console.log(
  A.slice(A.indexOf("Susi"), A.indexOf("going")).concat(
    A.slice(A.indexOf("school"))
  )
);
