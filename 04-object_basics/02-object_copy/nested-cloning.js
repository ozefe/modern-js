// Properties can be references to other objects:
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    },
};

alert(`User height: ${user.sizes.height}`); // 182

// Now it's not enough to copy `clone.sizes = user.sizes`, because `user.sizes`
// is an object, and will be copied by reference, so clone and user will share
// the same sizes:
let clone = Object.assign({}, user);

// alerts true, same object
alert(`user.sizes === clone.sizes => ${user.sizes === clone.sizes}`);

// user and clone share sizes, change a property from one place:
user.sizes.width = 60;

// 60, get the result from the other one:
alert(`Clone width: ${clone.sizes.width}`);

// The call `structuredClone(object)` clones the object with all nested
// properties:
clone = structuredClone(user);

// alerts false, different objects
alert(`user.sizes === clone.sizes => ${user.sizes === clone.sizes}`);

// user and clone are totally unrelated now, change a property from one place:
user.sizes.width = 40;

// 60, not related
alert(`Clone width: ${clone.sizes.width}`);

// `structuredClone` also supports circular references, when an object property
// references the object itself (directly or via a chain or references):
let circular_user = {};

// let's create a circular reference: `circular_user.me` references the
// `circular_user` itself.
circular_user.me = circular_user;

let circular_user_clone = structuredClone(circular_user);
alert(
    `Circular reference clone check: ${
        circular_user_clone.me === circular_user_clone
    }`
); // true

// Although, there are cases when `structuredClone` fails: e.g. when an object
// has a function property:
// error
alert(
    structuredClone({
        f: function () {},
    })
);
