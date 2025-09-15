// NOTE: This is not a good decorator since it swallows the return value of any
// given function `f`.
function debounce(f, ms) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => f.apply(this, args), ms);
    };
}

let f = debounce(alert, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);

// debounced function waits 1000ms after the last call and then runs:
// `alert("c")`
