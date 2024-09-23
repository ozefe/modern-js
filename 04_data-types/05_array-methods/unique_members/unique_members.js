let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O

function unique(arr) {
  let uniques = [];

  for (let member of arr) {
    if (!uniques.includes(member)) uniques.push(member);
  }

  return uniques;
}
