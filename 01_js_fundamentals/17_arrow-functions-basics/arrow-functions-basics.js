// let func = (arg1, arg2, ..., argN) => expression;
// let func = function(arg1, arg2, ..., argN) {
//     return expression;
// };

let sum = (a, b) => a + b;
alert(sum(1, 2)); // 3

let double = (n) => n * 2;
alert(double(3)); // 6

let sayHi = () => alert("Hello!");
sayHi(); // "Hello!"

let age = prompt("What is your age?", 18);

let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greetings!");
welcome();

// the curly brace opens a multiline function
sum = (a, b) => {
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};
alert(sum(1, 2)); // 3
