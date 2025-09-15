// Previously, for a single argument `x` we could just `cache.set(x, result)` to
// save the result and `cache.get(x)` to retrieve it. But now we need to
// remember the result for a combination of arguments `(min,max)` for
// `slow(min, max)`. The native `Map` takes single value only as the key.
//
// There are many solutions possible:
// 1. Implement a new (or use a third-party) map-like data structure that is
//    more versatile and allows multi-keys.
// 2. Use nested maps: `cache.set(min)` will be a `Map` that stores the pair
//    `(max, result)`. So we can get result as `cache.get(min).get(max)`.
// 3. Join two values into one. In our particular case we can just use a string
//    `"min,max"` as the `Map` key. For flexibility, we can allow to provide a
//    hashing function for the decorator, that knows how to make one value from
//    many. (This is the way.)
let worker = {
    slow(min, max) {
        alert(`Called with min=${min}, max=${max}`);
        return min + max;
    },
};

function cachingDecorator(func, hash) {
    let cache = new Map();

    return function (...args) {
        // We're calling `hash` function to create a single key from arguments.
        let key = hash(args);

        if (cache.has(key)) return cache.get(key);

        // Then we're using `func.call(this, ...arguments)` to pass both the
        // context and all arguments the wrapper got (not just the first one) to
        // the original function.
        let result = func.call(this, ...args);
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
