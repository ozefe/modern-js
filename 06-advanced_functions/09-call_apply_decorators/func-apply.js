// Instead of `func.call(this, ...arguments)` we can use
// `func.apply(this, arguments)`. The syntax of built-in method `func.apply` is:
// `func.apply(context, args)`. It runs the `func` setting `this=context` and
// using an array-like object args as the list of arguments.
//
// The only syntax difference between `call` and `apply` is that `call` expects
// a list of arguments, while `apply` takes an array-like object with them.
// func.call(context, ...args); // same
// func.apply(context, args); // same
//
// There's only a subtle difference regarding `args`:
// - The spread syntax `...` allows to pass iterable `args` as the list to
//   `call`.
// - The `apply` accepts only array-like `args`.
//
// For objects that are both iterable and array-like, such as a real array, we
// can use any of them, but `apply` will probably be faster, because most
// JavaScript engines internally optimize it better.
//
// BTW: Passing all arguments along with the context to another function is
// called call forwarding:
// let wrapper = function () {
//     return func.apply(this, arguments);
// };

// Implementing the `worker.slow` method using `apply`:

let worker = {
    someMethod() {
        return 1;
    },

    slow(min, max) {
        let someValue = this.someMethod();

        alert(`Called with min=${min}, max=${max}, and someValue=${someValue}`);
        return min + max + someValue;
    },
};

function cachingDecorator(func, hash) {
    let cache = new Map();

    return function (...args) {
        // We're calling `hash` function to create a single key from arguments.
        let key = hash(args);

        if (cache.has(key)) return cache.get(key);

        // Then we're using `func.apply(this, arguments)` to pass both the
        // context and all arguments the wrapper got (not just the first one) to
        // the original function.
        let result = func.apply(this, args);
        cache.set(key, result);

        return result;
    };
}

// Here we use a simple "joining" function that turns arguments `[3, 5]` into
// the key `"3,5"`. More complex cases may require other hashing functions.
function hash(args) {
    return `${args[0]},${args[1]}`;
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5)); // works
alert(`Again: ${worker.slow(3, 5)}`); // same (cached)
