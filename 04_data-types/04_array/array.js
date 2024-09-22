// let arr = new Array();
let arr = [];

let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum

fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]

fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]

fruits = ["Apple", "Orange", "Plum"];

alert(fruits.length); // 3

alert(fruits); // Apple,Orange,Plum

// mix of values
arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];

// get the object at index 1 and then show its name
alert(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello

alert(fruits[fruits.length - 1]); // Plum

// same as fruits[fruits.length - 1]
alert(fruits.at(-1)); // Plum

fruits = ["Apple", "Orange", "Pear"];

alert(fruits.pop()); // remove "Pear" and alert it
alert(fruits); // Apple,Orange

fruits = ["Apple", "Orange"];

fruits.push("Pear");
alert(fruits); // Apple,Orange,Pear

fruits = ["Apple", "Orange", "Pear"];

alert(fruits.shift()); // remove Apple and alert it
alert(fruits); // Orange,Pear

fruits = ["Orange", "Pear"];

fruits.unshift("Apple");
alert(fruits); // Apple,Orange,Pear

fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

alert(fruits); // Pineapple,Lemon,Apple,Orange,Peach

fruits = ["Banana"];

arr = fruits; // copy by reference (two variables reference the same array)

alert(arr === fruits); // true

arr.push("Pear"); // modify the array by reference
alert(fruits); // Banana,Pear - 2 items now

fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length
fruits.age = 25; // create a property with an arbitrary name

fruits = ["Apple", "Orange", "Pear"];

for (let i = 0; i < fruits.length; i++) {
  alert(fruits[i]);
}

// iterates over array elements
for (let fruit of fruits) {
  alert(fruit);
}

for (let key in fruits) {
  alert(fruits[key]); // Apple,Orange,Pear
}

let fruits = [];
fruits[123] = "Apple";

alert(fruits.length); // 124

arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert(arr); // 1,2

arr.length = 5; // return the length back
alert(arr[3]); // undefined: the values do not return

arr.length = 0; // clear the array

arr = new Array("Apple", "Pear", "etc");

arr = new Array(2); // will it create an array of [2]?

alert(arr[0]); // undefined! no elements.
alert(arr.length); // length 2

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

alert(matrix[0][1]); // 2, the second value of the first inner array

arr = [1, 2, 3];

alert(arr); // 1,2,3
alert(String(arr) === "1,2,3"); // true

alert([] + 1); // "1"
alert([1] + 1); // "11"
alert([1, 2] + 1); // "1,21"

alert([] == []); // false
alert([0] == [0]); // false

alert(0 == []); // true
alert("0" == []); // false
