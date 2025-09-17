// Arrow functions also have no `arguments` variable.

// Gets a function `f` and returns a wrapper around it that delays the call by
// `ms` milliseconds:
function deferArrow(f, ms) {
    return function () {
        // `arguments` is taken from the upper, anonymous function.
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

function deferNormal(f, ms) {
    return function (...args) {
        let ctx = this;
        setTimeout(function () {
            return f.apply(ctx, args);
        }, ms);
    };
}

function sayHi(who) {
    alert("Hello, " + who);
}

let sayHiDeferredArrow = deferArrow(sayHi, 2000);
sayHiDeferredArrow("John"); // "Hello, John" after 2 seconds

let sayHiDeferredNormal = deferArrow(sayHi, 2000);
sayHiDeferredNormal("John"); // "Hello, John" after 2 seconds
