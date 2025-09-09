// Infinity (and -Infinity) is a special numeric value that is greater
// (or less) than anything.
// NaN represents an error.

// `isNaN(value)` converts its argument to a number and then tests it for
// being NaN:
alert(`Is NaN, NaN: ${isNaN(NaN)}`); // true
alert(`Is "str", NaN: ${isNaN("str")}`); // true

// The value NaN is unique in that it does not equal anything, including
// itself:
alert(`NaN === NaN: ${NaN === NaN}`); // false

// `isFinite(value)` converts its argument to a number and returns true if it's
// a regular number, not NaN/Infinity/-Infinity:
alert(`Is "15" finite: ${isFinite("15")}`); // true
alert(`Is "str" finite: ${isFinite("str")}`); // false, because NaN
alert(`Is Infinity finite: ${isFinite(Infinity)}`); // false, because Infinity

// Sometimes isFinite is used to validate whether a string value is a regular
// number:
let num = +prompt("Enter a number", "");

// will be true unless you enter Infinity, -Infinity or NaN
alert(`Is ${num} finite: ${isFinite(num)}`);

// NOTE: An empty or a space-only string is treated as 0 in all numeric
// functions including `isFinite`.

// `Number.isNaN` and `Number.isFinite` methods are the more "strict" versions
// of `isNaN` and `isFinite` functions. They do not autoconvert their argument
// into a number, but check if it belongs to the number type instead.

// `Number.isNaN(value)` returns true if the argument belongs to the number
// type and it is NaN. In any other case, it returns false:
alert(`Is NaN, NaN (strict): ${Number.isNaN(NaN)}`); // true
alert(`Is "str" / 2, NaN (strict): ${Number.isNaN("str" / 2)}`); // true

// Note the difference:
// false, because "str" belongs to the string type, not the number type
alert(`Is "str", NaN (strict): ${Number.isNaN("str")}`);

// true, because `isNaN` converts string "str" into a number and gets NaN as a
// result of this conversion
alert(`Is "str", NaN (non strict): ${isNaN("str")}`);

// `Number.isFinite(value)` returns true if the argument belongs to the number
// type and it is not NaN/Infinity/-Infinity. In any other case, it returns
// false:
alert(`Is 123 finite (strict): ${Number.isFinite(123)}`); // true
alert(`Is Infinity finite (strict): ${Number.isFinite(Infinity)}`); // false
alert(`Is 2/0 finite (strict): ${Number.isFinite(2 / 0)}`); // false

// Note the difference:
// false, because "123" belongs to the string type, not the number type
alert(`Is "123" finite (strict): ${Number.isFinite("123")}`);

// true, because isFinite converts string "123" into a number 123
alert(`Is "123" finite (non strict): ${isFinite("123")}`);

// There is a special built-in method `Object.is` that compares values like
// ===, but is more reliable for two edge cases:
// 1. It works with NaN: `Object.is(NaN, NaN) === true`, that's a good thing.
// 2. Values 0 and -0 are different: `Object.is(0, -0) === false`, technically
//    that's correct because internally the number has a sign bit that may be
//    different even if all other bits are zeroes.
// In all other cases, `Object.is(a, b)` is the same as `a === b`.
