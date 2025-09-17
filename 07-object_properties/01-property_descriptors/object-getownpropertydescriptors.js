// To get all property descriptors at once, we can use the method
// `Object.getOwnPropertyDescriptors(obj)`. Together with
// `Object.defineProperties` it can be used as a "flags-aware" way of cloning an
// object:
let user = {};

Object.defineProperties(user, {
    name: {
        value: "John",
        writable: false,
        enumerable: true,
        configurable: true,
    },
    surname: {
        value: "Smith",
        writable: false,
        enumerable: true,
        configurable: true,
    },
    // ...
});

let userClone = Object.defineProperties(
    {},
    Object.getOwnPropertyDescriptors(user)
);

// Normally when we clone an object, we use an assignment to copy properties:
let clone = {};
for (let key in user) {
    clone[key] = user[key];
}
// ...But that does not copy flags. So if we want a "better" clone,
// `Object.defineProperties` is preferred.

// Another difference is that `for...in` ignores symbolic and non-enumerable
// properties, but `Object.getOwnPropertyDescriptors` returns all property
// descriptors including symbolic and non-enumerable ones.
