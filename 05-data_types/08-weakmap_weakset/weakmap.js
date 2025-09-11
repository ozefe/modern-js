// The first difference between `Map` and `WeakMap` is that keys must be`
// objects, not primitive values:
let weakMap = new WeakMap();
let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// TypeError: Invalid value used as weak map key: can't use a string as the key
// weakMap.set("test", "Whoops"); // Error, because "test" is not an object

// If we use an object as the key in it, and there are no other references to
// that object, it will be removed from memory (and from the map) automatically.
let john = { name: "John" };

weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory!

// WeakMap has only the following methods:
let example = { example: 123 };

alert(`Set: ${weakMap.set(example, 456)}`);
alert(`Get: ${weakMap.get(example)}`);
alert(`Delete: ${weakMap.delete(example)}`);
alert(`Has: ${weakMap.has(example)}`);
