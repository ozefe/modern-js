// Strings can't be changed in JavaScript. It is impossible to change a
// character:
let str = "Hi";

str[0] = "h"; // error
alert(str[0]); // doesn't work

// The usual workaround is to create a whole new string and assign it to `str`
// instead of the old one:
str = "h" + str[1]; // replace the string
alert(str); // hi
