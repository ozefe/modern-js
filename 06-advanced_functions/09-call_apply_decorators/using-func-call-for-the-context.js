"use strict";

// The caching decorator is not suited to work with object methods:
// we'll make `worker.slow` caching
{
    let worker = {
        someMethod() {
            return 1;
        },

        slow(x) {
            // scary CPU-heavy task here
            alert(`Called with: ${x}`);
            return x * this.someMethod();
        },
    };

    // caching decorator
    function cachingDecorator(func) {
        let cache = new Map();

        return function (x) {
            if (cache.has(x)) return cache.get(x);

            // the wrapper calls the original function as `func(x)` here. And,
            // when called like that, the function gets `this = undefined`.
            let result = func(x);
            cache.set(x, result);

            return result;
        };
    }

    alert(worker.slow(1)); // the original method works

    worker.slow = cachingDecorator(worker.slow); // now make it caching

    // TypeError: Cannot read properties of undefined (reading 'someMethod')
    // alert(worker.slow(2));
}
// There's a special built-in function method `func.call(context, ...args)` that
// allows us to call a function explicitly setting `this`. The syntax is:
// `func.call(context, arg1, arg2, ..., argN);`
// It runs `func` providing the first argument as `this`, and the next as the
// arguments.
{
    function sayHi() {
        alert(this.name);
    }

    let user = { name: "John" };
    let admin = { name: "Admin" };

    // use call to pass different objects as `this`
    sayHi.call(user); // John
    sayHi.call(admin); // Admin
}

// With arguments:
{
    function say(phrase) {
        alert(`${this.name}: ${phrase}`);
    }

    let user = { name: "John" };

    // user becomes `this`, and "Hello" becomes the first argument
    say.call(user, "Hello"); // John: Hello
}

// We can fix our main method by using the call in the wrapper to pass the
// context to the original function:
{
    let worker = {
        someMethod() {
            return 1;
        },

        slow(x) {
            // scary CPU-heavy task here
            alert(`Called with: ${x}`);
            return x * this.someMethod();
        },
    };

    // caching decorator
    function cachingDecorator(func) {
        let cache = new Map();

        return function (x) {
            if (cache.has(x)) return cache.get(x);

            let result = func.call(this, x); // `this` is passed correctly now
            cache.set(x, result);

            return result;
        };
    }

    alert(worker.slow(1)); // the original method works

    worker.slow = cachingDecorator(worker.slow); // now make it caching

    alert(worker.slow(2)); // works
    alert(worker.slow(2)); // works, doesn't call the original (cached)

    // How `this` is passed along:
    // 1. After the decoration, `worker.slow` is now the wrapper
    //    `function (x) { ... }`.
    // 2. So when `worker.slow(2)` is executed, the wrapper gets `2` as an
    //    argument and `this=worker` (it's the object before dot).
    // 3. Inside the wrapper, assuming the result is not yet cached,
    //    `func.call(this, x)` passes the current `this` (`=worker`) and the
    //    current argument (`=2`) to the original method.
}
