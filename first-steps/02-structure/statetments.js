// Statements can be written in a single line
alert("Hello"); alert("World");

// But for readability one statement per line is better
alert("Hello");
alert("World");

// Semicolons can be omitted in most cases when a line break exists
// Here, JavaScript interprets the line break as an "implicit" semicolon
// This is called an automatic semicolon insertion
//
// https://tc39.es/ecma262/#sec-automatic-semicolon-insertion
alert("Hello")
alert("World")

// There are cases when a newline does not mean a semicolon:
alert(3 +
1
+ 2);

// There are situations where JavaScript "fails" to assume a semicolon where
// it is really needed:
alert("Hello");

[1, 2].forEach(alert);

// Now let's remove the semicolon after the alert:
alert("Hello")

[1, 2].forEach(alert);

// Here's how the engine sees it:
// alert("Hello")[1, 2].forEach(alert);
