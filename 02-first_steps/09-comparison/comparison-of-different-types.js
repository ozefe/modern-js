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
