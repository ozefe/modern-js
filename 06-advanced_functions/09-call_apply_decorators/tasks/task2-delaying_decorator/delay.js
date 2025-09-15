// NOTE: This is not a good decorator since it swallows the return value of any
// given function `f`.
function delay(f, ms) {
    return function (...args) {
        // Arrow functions do not have own `this`, so `f.apply(this, args)`
        // takes `this` from the wrapper.
        setTimeout(() => f.apply(this, args), ms);
    };
}

function f(x) {
    return alert(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms
