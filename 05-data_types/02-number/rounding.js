// Math.floor: Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil: Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round: Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. In
// the middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.
// Math.trunc: Removes anything after the decimal point without rounding: 3.1
// becomes 3, -1.1 becomes -1.

// Rounding the number to n-th digit after the decimal:
// 1. Multiply-and-divide:
let num = 1.23456;
alert(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// 2. toFixed(n):
num = 12.34;
alert(num.toFixed(1)); // "12.3"
