// Variables declared with `var` are either function-scoped or global-scoped.
// They are visible through blocks. That’s because a long time ago in
// JavaScript, blocks had no Lexical Environments, and `var` is a remnant of
// that.

if (true) {
    var testVar = true; // use "var" instead of "let"
    let testLet = true;
}

// As `var` ignores code blocks, we’ve got a global variable `testVar`:
alert(testVar); // true, the variable lives after if
// alert(testLet); // ReferenceError: testLet is not defined

// The same thing for loops: `var` cannot be block- or loop-local:
for (var i = 0; i < 10; i++) {
    var one = 1;
    // ...
}
alert(i); // 10, `i` is visible after loop, it's a global variable
alert(one); // 1, `one` is visible after loop, it's a global variable

// If a code block is inside a function, then `var` becomes a function-level
// variable:
function sayHi() {
    if (true) {
        var phrase = "Hello";
    }

    alert(phrase); // works
}

sayHi();
// alert(phrase); // ReferenceError: phrase is not defined
