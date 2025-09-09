let billion = 1000000000;
alert(`Normal billion: ${billion}`);

billion = 1_000_000_000;
alert(`Syntactic sugar billion: ${billion}`);

billion = 1e9; // 1 billion, literally: 1 and 9 zeroes
alert(`e billion: ${billion}`);

alert(1e3 === 1 * 1000); // e3 means *1000
alert(1.23e6 === 1.23 * 1000000); // e6 means *1000000

let mcs = 0.000001; // 1 microsecond (one-millionth of a second)
alert(`Normal microsecond: ${mcs}`);

mcs = 1e-6; // five zeroes to the left from 1
alert(`e microsecond: ${mcs}`);

// -3 divides by 1 with 3 zeroes
alert(1e-3 === 1 / 1000); // 0.001

// -6 divides by 1 with 6 zeroes
alert(1.23e-6 === 1.23 / 1000000); // 0.00000123

// an example with a bigger number
alert(1234e-2 === 1234 / 100); // 12.34, decimal point moves 2 times
