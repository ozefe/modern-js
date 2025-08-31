// Boolean is the result
// All comparison operators return a boolean value
alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)

// A comparison result can be assigned to a variable, just like any value:
let result = 5 > 4; // assign the result of the comparison
alert(result); // true

// String comparison
// To see whether a string is greater than another, JavaScript uses the
// so-called "dictionary" or "lexicographical" order. In other words, strings
// are compared letter-by-letter.
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to
// numbers.
alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

alert(true == 1); // true
alert(false == 0); // true

let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true!

// Strict equality
// A strict equality operator === checks the equality without type conversion.
alert(0 == false); // true
alert("" == false); // true

alert(0 === false); // false, because the types are different

// Comparison with null and undefined
alert(null === undefined); // false

// There's a special rule. These two are a "sweet couple": they equal each
// other (in the sense of ==), but not any other value.
alert(null == undefined); // true

// Strange result: null vs 0
alert(null > 0); // false, comparison converts null to 0
alert(null == 0); // false, equality check does not convert null to a number
alert(null >= 0); // true, comparison converts null to 0

// An incomparable undefined
// The value undefined shouldn't be compared to other values:
alert(undefined > 0); // false, comparison converts undefined to NaN
alert(undefined < 0); // false, comparison converts undefined to NaN
alert(undefined == 0); // false
