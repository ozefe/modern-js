// let func = (arg1, arg2, ..., argN) => expression;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
let sum = (a, b) => a + b;
alert(sum(1, 2)); // 3

// roughly the same as: let double = function(n) { return n * 2 }
let double = (n) => n * 2;
alert(double(3)); // 6

let sayHi = () => alert("Hello!");
sayHi();

let age = prompt("What is your age?", 18);

let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greetings!");
welcome();

// Multiline arrow functions
// the curly brace opens a multiline function
sum = (a, b) => {
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};
alert(sum(1, 2)); // 3
