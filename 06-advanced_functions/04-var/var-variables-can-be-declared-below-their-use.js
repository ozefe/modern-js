// `var` declarations are processed when the function starts (or script starts
// for globals). In other words, `var` variables are defined from the beginning
// of the function, no matter where the definition is (assuming that the
// definition is not in the nested function).

{
    function sayHi() {
        phrase = "Hello"; // (*)

        // This branch never executes, but that doesn’t matter. The `var` inside it
        // is processed in the beginning of the function, so at the moment of
        // assignment to the `phrase`, the variable exists.
        if (false) {
            var phrase;
        }

        alert(phrase);
    }
    sayHi(); // "Hello"
}

// People also call such behavior "hoisting" (raising), because all var are
// "hoisted" (raised) to the top of the function.

// Declarations are hoisted, but assignments are not:
{
    function sayHi() {
        alert(phrase);

        // The declaration is processed at the start of function execution
        // ("hoisted"), but the assignment always works at the place where it
        // appears.
        var phrase = "Hello";
    }
    sayHi(); // undefined
}
