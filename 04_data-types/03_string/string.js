let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multiline list of guests, same as above

alert(`The backslash: \\`); // The backslash: \

alert('I\'m the Walrus!'); // I'm the Walrus!

alert(`My\n`.length); // 3

let str = `Hello`;

// the first character
alert(str[0]); // H
alert(str.at(0)); // H

// the last character
alert(str[str.length - 1]); // o
alert(str.at(-1));

alert(str[-2]); // undefined
alert(str.at(-2)); // l

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

str = `Hi`;

str[0] = "h"; // TypeError: Cannot assign to read only property '0' of string 'Hi'
alert(str[0]); // doesn't work

str = "h" + str[1]; // replace the string

alert(str); // hi

alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); // interface
alert("Interface"[0].toLowerCase()); // 'i'

str = "Widget with id";

alert(str.indexOf("Widget")); // 0, because "Widget" is found at the beginning
alert(str.indexOf("Widget")); // -1, not found, the search is case-sensitive

alert(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)
alert(str.indexOf("id", 2)); // 12

str = "As sly as a fox, as strong as an ox";
let target = "as"; // let's look for it

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert(`Found at ${foundPos}`);
//   pos = foundPos + 1; // continue the search from the next position
// }

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert(pos);
}

str = "Widget with id";

if (str.indexOf("Widget")) {
  alert("We found it"); // doesn't work!
}

if (str.indexOf("Widget") != -1) {
  alert("We found it"); // works now!
}

alert("Widget with id".includes("Widget")); // true
alert("Hello".includes("Bye")); // false

alert("Widget".includes("id")); // true
alert("Widget".includes("id", 3)); // false, from position 3 there is no "id"

alert("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
alert("Widget".endsWith("get")); // true, "Widget" ends with "get"

str = "stringify";

alert(str.slice(0, 5)); // "strin", the substring from 0 to 5 (not including 5)
alert(str.slice(0, 1)); // "s", from 0 to 1, but not including 1, so only character at 0

alert(str.slice(2)); // "ringify", from the 2nd position till the end

// start at the 4th position from the right, end at the 1st from the right
alert(str.slice(-4, -1)); // "gif"

// these are the same for substring
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"

// ...but not for slice:
alert(str.slice(2, 6)); // "ring" (the same)
alert(str.slice(6, 2)); // "" (an empty string)

alert(str.substr(2, 4)); // "ring", from the 2nd position get 4 characters
alert(str.substr(-4, 2)); // "gi", from the 4th position get 2 characters

alert("a" > "Z"); // true
alert("Österreich" > "Zealand"); // true

// different case letters have different codes
alert("Z".codePointAt(0)); // 90
alert("z".codePointAt(0)); // 122
alert("z".codePointAt(0).toString(16)); // 7a (if we need a hexadecimal value)

alert(String.fromCodePoint(90)); // Z
alert(String.fromCodePoint(0x5a)); // Z (we can also use a hex value as an argument)

str = "";

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}

alert(str);
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

alert("Österreich".localeCompare("Zealand")); // -1
