// The method `num.toString(base)` returns a string representation of `num` in
// the numeral system with the given `base`:
let num = 255;

alert(`Hexadecimal: ${num.toString(16)}`); // ff
alert(`Binary: ${num.toString(2)}`); // 11111111
alert(`Maximum: ${123456..toString(36)}`); // 2n9c

// NOTE: Two dots to call a method: If we want to call a method directly on a
// number, like `toString` in the example above, then we need to place two dots
// `..` after it.
//
// If we placed a single dot, then there would be an error, because JavaScript
// syntax implies the decimal part after the first dot. And if we place one
// more dot, then JavaScript knows that the decimal part is empty and now uses
// the method.
