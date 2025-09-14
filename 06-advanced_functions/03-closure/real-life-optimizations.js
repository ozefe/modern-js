// In theory, while a function is alive, all outer variables are also retained.
// But in practice, JavaScript engines try to optimize that. They analyze
// variable usage and if it’s obvious from the code that an outer variable is
// not used -- it is removed.

function f() {
    let value = Math.random();

    function g() {
        debugger; // in console: type alert(value); No such variable!
    }

    return g;
}

let g = f();
g();

// As you could see, there is no such variable! In theory, it should be
// accessible, but the engine optimized it out because although we create such
// a variable, we never use it. Engines are smart enough to recognize that and
// they remove it from the memory.

// That may lead to funny (if not such time-consuming) debugging issues. One of
// them: we can see a same-named outer variable instead of the expected one:
let value = "Surprise!";

function ff() {
    let value = "the closest value";

    function gg() {
        debugger; // in console: type alert(value); Surprise!
    }

    return gg;
}

let g2 = ff();
g2();
