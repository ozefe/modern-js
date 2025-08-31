// String Conversion
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

// Numeric Conversion
alert("6" / "2"); // 3, strings are converted to numbers

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123
alert(typeof num); // number

// If the string is not a valid number, the result of such a conversion is NaN:
let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

alert(Number("   123   ")); // 123
alert(Number("123z")); // NaN (error reading a number at "z")
alert(Number(true)); // 1
alert(Number(false)); // 0
alert(Number(null)); // 0
alert(Number(undefined)); // NaN

// Boolean Conversion
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); // true
alert(Boolean("")); // false

alert(Boolean("0")); // true
alert(Boolean(" ")); // spaces, also true (any non-empty string is true)
