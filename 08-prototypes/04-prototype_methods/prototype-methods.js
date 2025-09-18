// Setting or reading the prototype with `obj.__proto__` is considered outdated
// and somewhat deprecated (moved to the so-called "Annex B" of the JavaScript
// standard, meant for browsers only).
//
// The modern methods to get/set a prototype are:
// - `Object.getPrototypeOf(obj)`: returns the `[[Prototype]]` of `obj`.
// - `Object.setPrototypeOf(obj, proto)`: sets the `[[Prototype]]` of `obj` to
//   `proto`.
//
// The only usage of `__proto__` that's not frowned upon, is as a property when
// creating a new object: `{ __proto__: ... }`. Although, there's a special
// method for this too: `Object.create(proto[, descriptors])`: creates an empty
// object with given `proto` as `[[Prototype]]` and optional property
// `descriptors`.

let animal = {
    eats: true,
};

// create a new object with `animal` as a prototype
let rabbit = Object.create(animal); // same as `{ __proto__: animal }`

alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of `rabbit` to `{}`
alert(rabbit.eats); // undefined

// NOTE: Don't change `[[Prototype]]` on existing objects if speed matters:
// Technically, we can get/set `[[Prototype]]` at any time but usually we only
// set it once at the object creation time and don't modify it anymore: `rabbit`
// inherits from `animal`, and that is not going to change.
//
// JavaScript engines are highly optimized for this. Changing a prototype
// "on-the-fly" with `Object.setPrototypeOf` or `obj.__proto__=` is a very slow
// operation as it breaks internal optimizations for object property access
// operations. So avoid it unless you know what you're doing, or JavaScript
// speed totally doesn't matter for you.

// The `Object.create` method is a bit more powerful, as it has an optional
// second argument: property descriptors. We can provide additional properties
// to the new object:
rabbit = Object.create(animal, {
    jumps: {
        value: true,
    },
});

alert(rabbit.jumps); // true

// We can also use `Object.create` to perform an object cloning more powerful
// than copying properties with `for..in`:
let rabbitClone = Object.create(
    Object.getPrototypeOf(rabbit),
    Object.getOwnPropertyDescriptors(rabbit)
);
// This call makes a truly exact copy of `rabbit`, including all properties:
// enumerable and non-enumerable, data properties and setters/getters --
// everything, and with the right `[[Prototype]]`.
