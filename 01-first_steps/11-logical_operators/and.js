// AND (`&&`)
// result = a && b;
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert("The time is 12:30");
}

// evaluated as `true && false`
if (1 && 0) {
    alert("won't work, because the result is falsy");
}

// if the first operand is truthy, AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy, AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

alert(1 && 2 && null && 3); // null
alert(1 && 2 && 3); // 3, the last one

// The precedence of AND (`&&`) operator is higher than OR (`||`).
// a && b || c && d === (a && b) || (c && d)

let x = 1;

x > 0 && alert("Greater than zero!");
if (x > 0) alert("Greater than zero!");
