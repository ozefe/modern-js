// If a variable is declared inside a code block `{...}`, it’s only visible
// inside that block:
{
    // do some job with local variables that should not be seen outside
    let message = "Hello"; // only visible in this block
    alert(message); // Hello
}
// alert(message); // Error: message is not defined

// We can use this to isolate a piece of code that does its own task, with
// variables that only belong to it:
{
    // show message
    let message = "Hello";
    alert(message);
}

{
    // show another message
    let message = "Goodbye";
    alert(message);
}

// For `if, for, while` and so on, variables declared in `{...}` are also only
// visible inside:
if (true) {
    let phrase = "Hello!";
    alert(phrase); // Hello!
}
// alert(phrase); // Error, no such variable!

for (let i = 0; i < 3; i++) {
    // the variable i is only visible inside this for
    alert(i); // 0, then 1, then 2
}
// alert(i); // Error, no such variable
