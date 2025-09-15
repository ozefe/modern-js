// let timerId = setTimeout(func | code, [delay], [arg1], [arg2], ...);
// - `func | code`: Function or a string of code to execute. Usually, that's a
//   function. For historical reasons, a string of code can be passed, but
//   that's not recommended.
// - `delay`: The delay before run, in milliseconds (1000 ms = 1 second), by
//   default 0.
// - `arg1`, `arg2`, ..., `argN`: Arguments for the function.

function sayHi() {
    alert("Hello");
}

// Say hi after one second
setTimeout(sayHi, 1000);

function sayHiWithArgs(phrase, who) {
    alert(phrase + ", " + who);
}

// With arguments
setTimeout(sayHiWithArgs, 1000, "Hello", "John"); // Hello, John

// If the first argument is a string, then JavaScript creates a function from
// it:
setTimeout("alert('Hello as a string!')", 1000);

// But using strings is not recommended, so we use arrow functions instead of
// them:
setTimeout(() => alert("Hello as an arrow function!"), 1000);
