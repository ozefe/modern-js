// no error
let message = "hello";
message = 123456;

// Number
// The number type represents both integer and floating point numbers.
// Besides regular numbers, there are so-called "special numeric values" which
// also belong to this data type: Infinity, -Infinity and NaN.
let n = 123;
n = 12.345;

// Infinity represents the mathematical Infinity ∞. It is a special value
// that's greater than any number.
alert(1 / 0); // Infinity
alert(Infinity); // Infinity

// NaN represents a computational error. It is a result of an incorrect or an
// undefined mathematical operation, for instance:
alert("not a number" / 2); // NaN, such division is erroneous

// NaN is sticky. Any further mathematical operation on NaN returns NaN:
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN

// So, if there's a NaN somewhere in a mathematical expression, it propagates
// to the whole result (there's only one exception to that: NaN ** 0 is 1).

// BigInt
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

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

// Boolean (logical type)
// The boolean type has only two values: true and false.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
alert(isGreater); // true (the comparison result is "yes")

// The "null" value
// In JavaScript, null is not a “reference to a non-existing object” or a
// “null pointer” like in some other languages. It's just a special value which
// represents "nothing", "empty" or "value unknown".
let age = null;

// The "undefined" value
// The meaning of undefined is "value is not assigned". If a variable is
// declared, but not assigned, then its value is undefined:
let age2;

alert(age2); // shows "undefined"

// Technically, it is possible to explicitly assign undefined to a variable:
let age3 = 100;

// change the value to undefined
age3 = undefined;

alert(age3); // "undefined"

typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof alert; // "function"

// Math is a built-in object that provides mathematical operations.
typeof Math; // "object"

// The result of typeof null is "object". That's an officially recognized
// error in typeof, coming from very early days of JavaScript and kept for
// compatibility. Definitely, null is not an object. It is a special value with
// a separate type of its own. The behavior of typeof is wrong here.
typeof null; // "object"
