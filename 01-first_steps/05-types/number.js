// Number
// The number type represents both integer and floating point numbers.
// Besides regular numbers, there are so-called "special numeric values" which
// also belong to this data type: Infinity, -Infinity and NaN.
let n = 123;
n = 12.345;

// Infinity represents the mathematical Infinity ∞. It is a special value
// that's greater than any number.
alert(1 / 0); // Infinity
alert(Infinity); // Infinity

// NaN represents a computational error. It is a result of an incorrect or an
// undefined mathematical operation, for instance:
alert("not a number" / 2); // NaN, such division is erroneous

// NaN is sticky. Any further mathematical operation on NaN returns NaN:
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN

// So, if there's a NaN somewhere in a mathematical expression, it propagates
// to the whole result (there's only one exception to that: NaN ** 0 is 1).
