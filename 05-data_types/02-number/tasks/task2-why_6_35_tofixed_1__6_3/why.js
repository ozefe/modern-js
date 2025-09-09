// According to the documentation `Math.round` and `toFixed` both round to the
// nearest number: 0..4 lead down while 5..9 lead up.

alert((1.35).toFixed(1)); // 1.4

// Why is 6.35 rounded to 6.3, not 6.4?
alert((6.35).toFixed(1)); // 6.3

// Because 6.35 is actually 6.3499999999999996447286321199499070644378662109375
// So, 6.34999... rounds down to 6.3

// We can round 6.35 the right way:
// 63.50000000000000000000
alert(`Bringing it closer to an integer: ${(6.35 * 10).toFixed(20)}`);

// 6.35 -> 63.5 -> 64(rounded) -> 6.4
alert(`Right way: ${Math.round(6.35 * 10) / 10}`);
