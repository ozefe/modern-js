// We can also add properties of our own:
function sayHi() {
    alert("Hi");

    // let's count how many times we run
    sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert(`Called ${sayHi.counter} times`); // Called 2 times

// NOTE: A property is not a variable: A property assigned to a function like
// `sayHi.counter = 0` does not define a local variable `counter` inside it. In
// other words, a property `counter` and a variable `let counter` are two
// unrelated things.
//
// We can treat a function as an object, store properties in it, but that has no
// effect on its execution. Variables are not function properties and vice
// versa. These are just parallel worlds.

// Function properties can replace closures sometimes. For instance, we can
// rewrite the counter function example to use a function property:
function makeCounter() {
    // instead of:
    // let count = 0

    function counter() {
        // The `count` is now stored in the function directly, not in its outer
        // Lexical Environment.
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1

// The main difference is that if the value of `count` lives in an outer
// variable, then external code is unable to access it. Only nested functions
// may modify it. And if it's bound to a function, then such a thing is
// possible:
counter.count = 10;
alert(counter()); // 10
