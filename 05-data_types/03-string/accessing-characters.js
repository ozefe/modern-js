// To get a character at position `pos`, use square brackets `[pos]` or call
// the method `str.at(pos)`. The first character starts from the zero position:
let str = `Hello`;

// the first character
alert(str[0]); // H
alert(str.at(0)); // H

// the last character
alert(str[str.length - 1]); // o

// If `pos` is negative, then it's counted from the end of the string:
alert(str.at(-1)); // o

// But the square brackets always return undefined for negative indexes:
alert(str[-1]); // undefined

// We can also iterate over characters using for..of:
for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
