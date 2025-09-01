// no error
let message = "hello";
message = 123456;

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
