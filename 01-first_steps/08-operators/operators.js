// Terms: "unary", "binary", "operand"
let x = 1;

x = -x;
alert(x); // -1, unary negation was applied

let x2 = 1,
    y = 3;
alert(y - x); // 2, binary minus subtracts values

// Remainder %
alert(5 % 2); // 1, the remainder of 5 divided by 2
alert(8 % 3); // 2, the remainder of 8 divided by 3
alert(8 % 4); // 0, the remainder of 8 divided by 4

// Exponentiation **
alert(2 ** 2); // 2² = 4
alert(2 ** 3); // 2³ = 8
alert(2 ** 4); // 2⁴ = 16

alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

// String concatenation with binary +
let s = "my" + "string";
alert(s); // mystring

// Note that if any of the operands is a string, then the other one is
// converted to a string too:
alert("1" + 2); // "12"
alert(2 + "1"); // "21"
alert(2 + 2 + "1"); // "41" and not "221"

alert(6 - "2"); // 4, converts '2' to a number
alert("6" / "2"); // 3, converts both operands to numbers

// Numeric conversion, unary +
// The unary plus or, in other words, the plus operator + applied to a single
// value, doesn't do anything to numbers. But if the operand is not a number,
// the unary plus converts it into a number. It actually does the same thing
// as Number(...), but is shorter.
// No effect on numbers
let x3 = 1;
alert(+x3); // 1

let y2 = -2;
alert(+y2); // -2

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

// Assignment
let x4 = 2 * 2 + 1;
alert(x4); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

// Chaining assignments
let a2, b2, c2;

a2 = b2 = c2 = 2 + 2;

alert(a2); // 4
alert(b2); // 4
alert(c2); // 4

// Modify-in-place
let n = 2;
n = n + 5;
n = n * 2;

let n2 = 2;
n2 += 5; // now n2 = 7 (same as n2 = n2 + 5)
n2 *= 2; // now n2 = 14 (same as n2 = n2 * 2)

alert(n2); // 14

let n3 = 2;

n3 *= 3 + 5; // right part evaluated first, same as n3 *= 8

alert(n3); // 16

// Increment/decrement
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
alert(counter); // 3

let counter2 = 2;
counter2--; // works the same as counter2 = counter2 - 1, but is shorter
alert(counter2); // 1

let counter3 = 1;

// the prefix form ++counter3 increments counter and returns the new value, 2
let a3 = ++counter3;
alert(a3); // 2

let counter4 = 1;

// the postfix form counter4++ also increments counter but returns the old
// value (prior to increment)
let a4 = counter4++;
alert(a4); // 1

let counter5 = 0;
counter5++;
++counter5;
alert(counter5); // 2, the lines above did the same

let counter6 = 0;
alert(++counter6); // 1

let counter7 = 0;
alert(counter7++); // 0

// Increment/decrement among other operators
let counter8 = 1;
alert(2 * ++counter8); // 4

let counter9 = 1;
alert(2 * counter9++); // 2, because counter9++ returns the "old" value

// Comma
// The comma operator allows us to evaluate several expressions, dividing them
// with a comma ,. Each of them is evaluated but only the result of the last
// one is returned.
let a5 = (1 + 2, 3 + 4);

alert(a5); // 7 (the result of 3 + 4)

// three operations in one line
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//  ...
// }
