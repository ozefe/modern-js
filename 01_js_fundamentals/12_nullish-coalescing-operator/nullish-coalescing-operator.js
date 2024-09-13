// let result = a !== null && a !== undefined ? a : b;
// let result = a ?? b;

let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";
alert(user ?? "Anonymous"); // "John" (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // SuperCoder

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000

// without parentheses
area = height ?? 100 * width ?? 50;
alert(area); // 0

// Syntax error
// let x = 1 && 2 ?? 3;
let x = (1 && 2) ?? 3; // Works
alert(x); // 2
