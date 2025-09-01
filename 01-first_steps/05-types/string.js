// String
// A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
alert(`Hello, ${name}!`); // Hello, John!

// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

alert("the result is ${1 + 2}"); // the result is ${1 + 2}
