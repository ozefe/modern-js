// If we declare the same variable with `let` twice in the same scope, that’s an
// error:
{
    let user;
    // let user; // SyntaxError: 'user' has already been declared
}

// With `var`, we can redeclare a variable any number of times. If we use `var`
// with an already-declared variable, it’s just ignored:
var user = "Pete";

// this `var` does nothing (already declared), it just changes the variable's
// value and it doesn't trigger an error
var user = "John";

alert(user); // John
