/*
 * There are two limitations on variable names in JavaScript:
 *     1. The name must contain only letters, digits, or the symbols $ and _.
 *     2. The first character must not be a digit.
 */
// Examples of valid names:
let userName;
let test123;

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

// let 1a; // cannot start with a digit
// let my-name; // hyphens '-' aren't allowed in the name

// Variables named apple and APPLE are two different variables.

let имя = "...";
let 我 = "...";

// let let = 5; // can't name a variable "let", error!
// let return = 5; // also can't name it "return", error!

// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5

// This is a bad practice and would cause an error in strict mode:
// "use strict";
// num = 5; // error: num is not defined
