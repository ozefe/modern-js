// Usually, a Lexical Environment is removed from memory with all the variables
// after the function call finishes. That’s because there are no references to
// it. As any JavaScript object, it’s only kept in memory while it’s reachable.
//
// However, if there’s a nested function that is still reachable after the end
// of a function, then it has `[[Environment]]` property that references the
// lexical environment. In that case the Lexical Environment is still reachable
// even after the completion of the function, so it stays alive.

function f() {
    let value = 123;

    return function () {
        alert(value);
    };
}

// `g.[[Environment]]` stores a reference to the Lexical Environment of the
// corresponding `f()` call
let g = f(); // while `g` function exists, the `value` stays in memory
g = null; // ...and now the memory is cleaned up

// A Lexical Environment object dies when it becomes unreachable (just like any
// other object). In other words, it exists only while there’s at least one
// nested function referencing it:

// Please note that if `f()` is called many times, and resulting functions are
// saved, then all corresponding Lexical Environment objects will also be
// retained in memory:

// 3 functions in array, every one of them links to Lexical Environment from the
// corresponding `f()` run
let arr = [f(), f(), f()];
