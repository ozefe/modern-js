// Strings are compared character-by-character in alphabetical order.
// A lowercase letter is always greater than the uppercase:
alert("a" > "Z"); // true

// Letters with diacritical marks are "out of order":
alert("Österreich" > "Zealand"); // true

// Strings in Javascript are encoded using UTF-16.

// `str.codePointAt(pos)`: Returns a decimal number representing the code for
// the character at position `pos`:
// different case letters have different codes
alert("Z".codePointAt(0)); // 90
alert("z".codePointAt(0)); // 122
alert("z".codePointAt(0).toString(16)); // 7a (if we need a hexadecimal value)

// `String.fromCodePoint(code)`: Creates a character from its numeric `code`:
alert(String.fromCodePoint(90)); // Z
alert(String.fromCodePoint(0x5a)); // Z

// Characters between 65-220:
let str = "";
for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
}
alert(str);
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// The characters are compared by their numeric code. The greater code means
// that the character is greater.

// Modern browsers support the internationalization standard ECMA-402. It
// provides a special method to compare strings in different languages,
// following their rules.

// `str.localeCompare(str2)`: Returns an integer indicating whether `str` is
// less, equal or greater than `str2` according to the language rules:
//   - Returns a negative number if `str` is less than `str2`.
//   - Returns a positive number if `str` is greater than `str2`.
//   - Returns 0 if they are equivalent.
alert("Österreich".localeCompare("Zealand")); // -1
