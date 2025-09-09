// Internally, a number is represented in 64-bit format IEEE-754, so there are
// exactly 64 bits to store a number: 52 of them are used to store the digits,
// 11 of them store the position of the decimal point, and 1 bit is for the
// sign.

// If a number is really huge, it may overflow the 64-bit storage and become a
// special numeric value Infinity:
alert(`1e500: ${1e500}`); // Infinity

alert(`Loss of precision: ${0.1 + 0.2 == 0.3}`); // false
alert(0.1 + 0.2); // 0.30000000000000004

// Fractions like 0.1, 0.2 that look simple in the decimal numeric system are
// actually unending fractions in their binary form:

// 0.0001100110011001100110011001100110011001100110011001101
alert((0.1).toString(2));

// 0.001100110011001100110011001100110011001100110011001101
alert((0.2).toString(2));

// 0.0100110011001100110011001100110011001100110011001101
alert((0.1 + 0.2).toString(2));

// The numeric format IEEE-754 solves this by rounding to the nearest possible
// number. These rounding rules normally don't allow us to see that "tiny
// precision loss", but it exists:
alert((0.1).toFixed(20)); // 0.10000000000000000555

// Solution:
let sum = 0.1 + 0.2;
alert(`Solved: ${sum.toFixed(2)}`); // "0.30"
alert(`Solved (int): ${+sum.toFixed(2)}`); // 0.3

// This suffers from the same issue: a loss of precision. There are 64 bits for
// the number, 52 of them can be used to store digits, but that's not enough.
// So the least significant digits disappear.
alert(9999999999999999); // shows 10000000000000000
alert(
    `9999999999999999 === 10000000000000000: ${
        9999999999999999 === 10000000000000000
    }`
);

// There are  two zeroes: 0 and -0. That's because a sign is represented by a
// single bit, so it can be set or not set for any number including a zero. In
// most cases, the distinction is unnoticeable, because operators are suited to
// treat them as the same.
alert(`0 === -0: ${0 === -0}`);
