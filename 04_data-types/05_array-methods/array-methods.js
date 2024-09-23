let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"
alert(arr[1]); // undefined

// now arr = ["I", , "home"];
alert(arr.length); // 3

arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element
alert(arr); // I,JavaScript

arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert(arr); // now ["Let's", "dance", "right", "now"]

arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);
alert(removed); // I,study <-- array of removed elements

arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert(arr); // I,study,complex,language,JavaScript

arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
alert(arr); // 1,2,3,4,5

arr = ["t", "e", "s", "t"];

alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arr.slice(-2)); // s,t (copy from -2 till the end)

let arr_copy = arr.slice();
alert(arr_copy); // t,e,s,t

arr = [1, 2];

// create an array from: arr and [3, 4]
alert(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3, 4] and [5, 6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3, 4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

let arrayLike = {
  0: "something",
  length: 1,
};

alert(arr.concat(arrayLike)); // 1,2,[object Object]

arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

alert(arr.concat(arrayLike)); // 1,2,something,else

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1

alert(arr.includes(1)); // true

let fruits = ["Apple", "Orange", "Apple"];

alert(fruits.indexOf("Apple")); // 0 (first Apple)
alert(fruits.lastIndexOf("Apple")); // 2 (last Apple)

arr = [NaN];
alert(arr.indexOf(NaN)); // -1 (wrong, should be 0)
alert(arr.includes(NaN)); // true (correct)

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

let user = users.find((item) => item.id == 1);
alert(user.name); // John

// Find the index of the first John
alert(users.findIndex((user) => user.name == "John")); // 0

// Find the index of the last John
alert(users.findLastIndex((user) => user.name == "John")); // 3

// returns array of the first two users
let someUsers = users.filter((user) => user.id < 3);
alert(someUsers.length); // 2

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
alert(lengths); // 5,7,6

arr = [1, 2, 15];

// the method reorders the content of arr
arr.sort();
alert(arr); // 1,15,2

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

arr = [1, 2, 15];

arr.sort(compareNumeric);
alert(arr); // 1,2,15

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  alert(a + " <> " + b);
  return a - b;
});

arr = [1, 2, 15];

// arr.sort(function (a, b) {
//   return a - b;
// });
arr.sort((a, b) => a - b);
alert(arr); // 1,2,15

let countries = ["Österreich", "Andorra", "Vietnam"];

alert(countries.sort((a, b) => (a > b ? 1 : -1))); // Andorra,Vietnam,Österreich (wrong)
alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (correct!)

arr = [1, 2, 3, 4, 5];
arr.reverse();

alert(arr); // 5,4,3,2,1

let names = "Bilbo, Gandalf, Nazgul";

arr = names.split(", ");
for (let name of arr) {
  alert(`A message to ${name}.`); // A message to Bilbo (and other names)
}

arr = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);
alert(arr); // Bilbo,Gandalf

let str = "test";
alert(str.split("")); // t,e,s,t

arr = ["Bilbo", "Gandalf", "Nazgul"];

str = arr.join(";"); // glue the array into a string using ;
alert(str); // Bilbo;Gandalf;Nazgul

arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

// removed initial value from reduce (no 0)
result = arr.reduce((sum, current) => sum + current);
alert(result); // 15

arr = [];

// TypeError: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current);

alert(typeof {}); // object
alert(typeof []); // object (same)

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

function arraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

alert(arraysEqual([1, 2], [1, 2])); // true
