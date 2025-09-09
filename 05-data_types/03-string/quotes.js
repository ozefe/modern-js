let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

// Single and double quotes are essentially the same. Backticks, however, allow
// us to embed any expression into the string, by wrapping it in ${...}:
function sum(a, b) {
    return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// Also they allow a string to span multiple lines:
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // a list of guests, multiple lines

// Backticks also allow us to specify a "template function" before the first
// backtick. The syntax is: func`string`. The function func is called
// automatically, receives the string and embedded expressions and can process
// them. This feature is called "tagged templates".
