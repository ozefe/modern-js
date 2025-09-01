// Numeric conversion, unary +
// The unary plus or, in other words, the plus operator + applied to a single
// value, doesn't do anything to numbers. But if the operand is not a number,
// the unary plus converts it into a number. It actually does the same thing
// as Number(...), but is shorter.
// No effect on numbers
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0

let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
alert(+apples + +oranges); // 5

// the longer variant
// alert(Number(apples) + Number(oranges)); // 5
