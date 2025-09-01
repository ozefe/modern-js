// `??` returns the first argument if it's not `null` or `undefined`.
// Otherwise, the second one:
// let result = a ?? b;
// let result = a !== null && a !== undefined ? a : b;

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// Comparison with ||
// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

// The precedence of the ?? operator is the same as ||.
height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000

// without parentheses
area = height ?? 100 * width ?? 50;
alert(area); // 0

// Using ?? with && or ||
// let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works

alert(x); // 2
