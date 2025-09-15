// As of now, it works only on two arguments. It would be better if it could
// glue any number of `args`.
{
    function hash(args) {
        return `${args[0]},${args[1]}`;
    }
    alert(`Normal: ${hash([3, 5, 10, 69, 420])}`); // "3,5"
}

// The natural solution would be to use `arr.join` method:
{
    // Unfortunately, this won't work. Because we are calling `hash(arguments)`,
    // and `arguments` object is both iterable and array-like, but not a real
    // array.
    function hash(args) {
        return args.join();
    }
    alert(`With join: ${hash([3, 5, 10, 69, 420])}`);

    // So calling `join` on it would fail, as we can see below:`
    // function hash() {
    //     return arguments.join(); // Error: `arguments.join` is not a function
    // }
    // alert(hash(3, 5, 10, 69, 420));
}

// Still, there's an easy way to use array join:
{
    function hash() {
        // The trick is called method borrowing. We take (borrow) a `join`
        // method from a regular array (`[].join`) and use `[].join.call` to run
        // it in the context of arguments.
        return [].join.call(arguments);
    }
    alert(`With join trick: ${hash(3, 5, 10, 69, 420)}`); // 3,5,10,69,420

    // This works because the internal algorithm of the native method
    // `arr.join(glue)` is very simple:
    // 1. Let `glue` be the first argument or, if no arguments, then a comma
    //    `","`.
    // 2. Let `result` be an empty string.
    // 3. Append `this[0]` to `result`.
    // 4. Append `glue` and `this[1]`.
    // 5. Append `glue` and `this[2]`.
    // 6. ...do so until `this.length` items are glued.
    // 7. Return `result`.
    //
    // So, technically it takes `this` and joins `this[0]`, `this[1]`, ..., etc.
    // together. It's intentionally written in a way that allows any array-like
    // this (not a coincidence, many methods follow this practice). That's why
    // it also works with `this=arguments`.
}

// But, I don't like using `arguments` to get the arguments since it doesn't
// show up in the function signature and makes documentation and debugging
// unnecessarily difficult. So, let's try using it with `...args`:
{
    function hash(...args) {
        return [].join.call(args);
    }
    alert(`Better signature: ${hash(3, 5, 10, 69, 420)}`); // 3,5,10,69,420
}
