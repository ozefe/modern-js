// Named Function Expression, or NFE, is a term for Function Expressions that
// have a name.

// An ordinary Function Expression:
{
    let sayHi = function (who) {
        alert(`Hello, ${who}`);
    };
    sayHi("John"); // Hello, John
}

// Named Function Expression:
{
    // Adding the name `func` after `function` did not make it a Function
    // Declaration, because it is still created as a part of an assignment
    // expression. Adding such a name also did not break anything.
    let sayHi = function func(who) {
        if (who) {
            alert(`Hello, ${who}`);
        } else {
            func("Guest"); // use `func` to re-call itself
        }
    };
    sayHi("John"); // Hello, John
    sayHi(); // Hello, Guest

    // But this won't work: Error, func is not defined (not visible outside of
    // the function)
    // func();

    // There are two special things about the name `func`, that are the reasons
    // for it:
    //   1. It allows the function to reference itself internally.
    //   2. It is not visible outside of the function.
}

// Why do we use `func`? Maybe just use `sayHi` for the nested call? Actually,
// in most cases we can:
{
    // The problem with this code is that `sayHi` may change in the outer code.
    // If the function gets assigned to another variable instead, the code will
    // start to give errors:
    let sayHi = function (who) {
        if (who) {
            alert(`Hello, ${who}`);
        } else {
            sayHi("Guest");
        }
    };

    sayHi("John"); // Hello, John

    let welcome = sayHi;
    sayHi = null;

    // welcome(); // Error, the nested `sayHi` call doesn't work any more!
    // This happens because the function takes `sayHi` from its outer lexical
    // environment. There's no local `sayHi`, so the outer variable is used. And
    // at the moment of the call that outer `sayHi` is `null`. The optional name
    // which we can put into the Function Expression is meant to solve exactly
    // these kinds of problems.
}

// Fixed:
{
    let sayHi = function func(who) {
        if (who) {
            alert(`Hello, ${who}`);
        } else {
            func("Guest"); // Now all fine
        }
    };

    let welcome = sayHi;
    sayHi = null;

    welcome(); // Hello, Guest (nested call works)
}

// NOTE: There's no such thing for Function Declaration: The "internal name"
// feature described here is only available for Function Expressions, not for
// Function Declarations. For Function Declarations, there is no syntax for
// adding an "internal" name.
