// Let's say we have a function `slow(x)` which is CPU-heavy, but its results
// are stable. In other words, for the same `x` it always returns the same
// result. If the function is called often, we may want to cache (remember) the
// results to avoid spending extra-time on recalculations. But instead of adding
// that functionality into `slow()` we’ll create a wrapper function, that adds
// caching. There are many benefits of doing so.

function slow(x) {
    // there can be a heavy CPU-intensive job here
    alert(`Called with ${x}`);
    return x;
}

// This is a decorator: a special function that takes another function and
// alters its behavior. The idea is that we can call `cachingDecorator` for any
// function, and it will return the caching wrapper. That's great, because we
// can have many functions that could use such a feature, and all we need to do
// is to apply `cachingDecorator` to them. By separating caching from the main
// function code we also keep the main code simpler.
function cachingDecorator(func) {
    let cache = new Map();

    // The result of `cachingDecorator(func)` is a "wrapper": `function(x)` that
    // "wraps" the call of `func(x)` into caching logic:
    return function (x) {
        // if there's such key in cache, read the result from it
        if (cache.has(x)) return cache.get(x);

        let result = func(x); // otherwise call func
        cache.set(x, result); // and cache (remember) the result

        return result;
    };
}

// From an outside code, the wrapped `slow` function still does the same. It
// just got a caching aspect added to its behavior.
slow = cachingDecorator(slow);

alert(slow(1)); // slow(1) is cached and the result returned
alert(`Again: ${slow(1)}`); // slow(1) result returned from cache

alert(slow(2)); // slow(2) is cached and the result returned
alert(`Again: ${slow(2)}`); // slow(2) result returned from cache

// There are several benefits of using a separate `cachingDecorator` instead of
// altering the code of `slow` itself:
// - The `cachingDecorator` is reusable. We can apply it to another function.
// - The caching logic is separate, it did not increase the complexity of `slow`
//   itself (if there was any).
// - We can combine multiple decorators if needed (other decorators will
//   follow).
