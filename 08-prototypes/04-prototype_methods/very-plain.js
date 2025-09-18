// Objects can be used as associative arrays to store key/value pairs, but if we
// try to store user-provided keys in it (for instance, a user-entered
// dictionary), we can see an interesting glitch: all keys work fine except
// `"__proto__"`:
{
    let obj = {};

    let key = prompt("What's the key?", "__proto__");
    obj[key] = "some value";

    // The `__proto__` property is special: it must be either an `object` or
    // `null`. A string can not become a prototype. That's why assigning a
    // string to `__proto__` is ignored.
    alert(obj[key]); // [object Object], not "some value"!
}

// We can just switch to using `Map` for storage instead of plain objects, then
// everything's fine:
{
    let map = new Map();

    let key = prompt("What's the key?", "__proto__");

    // But `Object` syntax is often more appealing than this, as it's more
    // concise.
    map.set(key, "some value");

    alert(map.get(key)); // "some value" (as intended)
}

// Fortunately, we can use objects. `__proto__` is not a property of an
// `object`, but an accessor property of `Object.prototype`. So, if
// `obj.__proto__` is read or set, the corresponding getter/setter is called
// from its prototype, and it gets/sets `[[Prototype]]`. `__proto__` is a way to
// access `[[Prototype]]`, it is not `[[Prototype]]` itself.
{
    // Creates an empty object without a prototype (`[[Prototype]]` is `null`).
    // So, there is no inherited getter/setter for `__proto__`. Now it is
    // processed as a regular data property.
    let obj = Object.create(null);
    // or: `obj = { __proto__: null }`

    let key = prompt("What's the key?", "__proto__");
    obj[key] = "some value";

    alert(obj[key]); // "some value"

    // We can call such objects "very plain" or "pure dictionary" objects,
    // because they are even simpler than the regular plain object `{ ... }`. A
    // downside is that such objects lack any built-in object methods, e.g.
    // `toString`:
    // TypeError: Failed to execute 'alert' on 'Window': Cannot convert object
    // to primitive value
    // alert(obj); // Error because no `toString`
}

// Most object-related methods are `Object.something(...)`, like
// `Object.keys(obj)` -- they are not in the prototype, so they will keep
// working on such "very plain" objects:
{
    let chineseDictionary = Object.create(null);
    chineseDictionary.hello = "你好";
    chineseDictionary.bye = "再见";

    alert(Object.keys(chineseDictionary)); // hello,bye
}
