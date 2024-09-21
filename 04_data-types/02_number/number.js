// let billion = 1000000000;
// let billion = 1_000_000_000;
let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes
alert(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

// let mcs = 0.000001;
let mcs = 1e-6; // five zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

alert(0xff); // 255

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert(a == b); // true, the same number 255 at both sides

let num = 255;

alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111
alert((123456).toString(36)); // 2n9c

num = 1.23456;

alert(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23
alert(num.toFixed(1)); // "1.2"
alert(num.toFixed(7)); // 1.2345600

alert(1e500); // Infinity

alert(0.1 + 0.2 == 0.3); // false
alert(0.1 + 0.2); // 0.30000000000000004

alert((0.1).toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
alert((0.2).toString(2)); // 0.001100110011001100110011001100110011001100110011001101
alert((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101

alert((0.1).toFixed(20)); // 0.10000000000000000555

let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // "0.30"

alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

// Hello! I'm a self-increasing number!
alert(9999999999999999); // shows 10000000000000000

alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

alert(NaN === NaN); // false

alert(isFinite("15")); // true
alert(isFinite("str")); // false, because a special value: NaN
alert(isFinite(Infinity)); // false, because a special value: Infinity

num = +prompt("Enter a number", "");

// will be true unless you enter Infinity, -Infinity or not a number
alert(isFinite(num));

alert(Number.isNaN(NaN)); // true
alert(Number.isNaN("str" / 2)); // true

// Note the difference:
alert(Number.isNaN("str")); // false, because "str" belongs to the string type, not the number type
alert(isNaN("str")); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

alert(Number.isFinite(123)); // true
alert(Number.isFinite(Infinity)); // false
alert(Number.isFinite(2 / 0)); // false

// Note the difference:
alert(Number.isFinite("123")); // false, because "123" belongs to the string type, not the number type
alert(isFinite("123")); // true, because isFinite converts string "123" into a number 123

alert(Object.is(NaN, NaN)); // true
alert(Object.is(0, -0)); // false

alert(+"100px"); // NaN

alert(parseInt("100px")); // 100
alert(parseFloat("12.5em")); // 12.5

alert(parseInt("12.3")); // 12, only the integer part is returned
alert(parseFloat("12.3.4")); // 12.3, the second point stops the reading

alert(parseInt("a123")); // NaN, the first symbol stops the process

alert(parseInt("0xff", 16)); // 255
alert(parseInt("ff", 16)); // 255, without 0x also works

alert(parseInt("2n9c", 36)); // 123456

alert(Math.random()); // 0.1234567894322
alert(Math.random()); // 0.5435252343232
alert(Math.random()); // ... (any random numbers)

alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1

alert(Math.pow(2, 10)); // 2 in power 10 = 1024
