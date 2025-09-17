// The `for..in` loop iterates over inherited properties too:
let animal = {
    eats: true,
};

let rabbit = {
    __proto__: animal,

    jumps: true,
};

// Inheritance chain: `rabbit` inherits from `animal`, and `animal` inherits
// from `Object.prototype` (because `animal` is a literal object `{...}`, so
// it's by default), and then `Object.prototype` inherits from `null`.

// `Object.keys` only returns own keys
alert(Object.keys(rabbit)); // jumps

// `for..in` loops over both own and inherited keys
for (let property in rabbit) alert(property); // jumps, then eats

// If that's not what we want and we'd like to exclude inherited properties,
// there's a built-in method `obj.hasOwnProperty(key)`: it returns `true` if
// `obj` has its own (not inherited) property named `key`. So we can filter out
// inherited properties:
for (let property in rabbit) {
    // Where is the method `rabbit.hasOwnProperty` coming from? We did not
    // define it. Looking at the chain we can see that the method is provided by
    // `Object.prototype.hasOwnProperty`. In other words, it's inherited.
    //
    // Also, `hasOwnProperty` not appear in the `for..in` loop like `eats` and
    // `jumps` because it’s not enumerable. Just like all other properties of
    // `Object.prototype`, it has `enumerable: false` flag. And `for..in` only
    // lists enumerable properties.
    let isOwn = rabbit.hasOwnProperty(property);

    if (isOwn) {
        alert(`Our: ${property}`); // Our: jumps
    } else {
        alert(`Inherited: ${property}`); // Inherited: eats
    }
}

// NOTE: Almost all other key/value-getting methods ignore inherited properties:
// Almost all other key/value-getting methods, such as `Object.keys`,
// `Object.values`, and so on ignore inherited properties. They only operate on
// the object itself. Properties from the prototype are not taken into account.
