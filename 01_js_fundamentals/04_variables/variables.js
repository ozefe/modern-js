let message;
message = "Hello"; // store the string "Hello" in the variable named message

// or ...

// repeated 'let' leads to an error
// let message = "Hello"; // SyntaxError: 'message' has already been declared

message = "World!"; // value changed

alert(message);

// let user = "John",
//     age = 25,
//     msg = "Hello";

// or ...

let user = "John";
let age = 25;
let msg = "Hello";

let hello = "Hello world!";

// copy "Hello, world" from hello into message
message = hello;

// now two variables hold the same data
alert(hello);
alert(message);

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

// let 1a; // cannot start with a digit
// let my-name; // hyphens "-" aren't allowed in the name

let имя = "...";
let 我 = "...";

// let let = 5; // can't name a variable "let", error!
// let return = 5; // also can't name it "return", error!

// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5

const myBirthday = "18.04.1982";

// myBirthday = "01.01.2001"; // error, can't reassign the constant!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// const pageLoadTime = /* time taken by a webpage to load */;
