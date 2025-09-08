// 1. Primitives are still primitive. A single value, as desired.
// 2. The language allows access to methods and properties of strings, numbers,
//    booleans and symbols.
// 3. In order for that to work, a special "object wrapper" that provides the
//    extra functionality is created, and then is destroyed.
let str = "Hello";
alert(`Uppercased: ${str.toUpperCase()}`); // HELLO

// Here's what actually happens:
// 1. The string `str` is a primitive. So in the moment of accessing its
//    property, a special object is created that knows the value of the string,
//    and has useful methods, like `toUpperCase()`.
// 2. That method runs and returns a new string (shown by `alert`).
// 3. The special object is destroyed, leaving the primitive `str` alone.

let n = 1.23456;
alert(`Rounded: ${n.toFixed(2)}`); // 1.23

// NOTE: Constructors String/Number/Boolean are for internal use only!
alert(typeof 0); // "number"
alert(typeof new Number(0)); // "object"!

// Objects are always truthy in if, so here the alert will show up:
let zero = new Number(0);
if (zero) {
    // zero is true, because it's an object
    alert("zero is truthy!?!");
}

// On the other hand, using the same functions String/Number/Boolean without
// new is totally fine and useful thing. They convert a value to the
// corresponding type: to a string, a number, or a boolean (primitive):
let num = Number("123"); // convert a string to number
alert(`Converted number: ${num}\nType: ${typeof num}`);

// NOTE: null/undefined have no methods
// The special primitives `null` and `undefined` are exceptions. They have no
// corresponding "wrapper objects" and provide no methods. In a sense, they are
// "the most primitive".
alert(null.test); // error
