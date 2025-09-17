"use strict";

// A non-configurable property can't be deleted, its attributes can't be
// modified.

// `Math.PI` is non-writable, non-enumerable and non-configurable:
let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
alert(JSON.stringify(descriptor, null, 4));
/*
{
    "value": 3.141592653589793,
    "writable": false,
    "enumerable": false,
    "configurable": false
}
*/

// We are unable to change the value of `Math.PI` or overwrite it:

// TypeError: Cannot assign to read only property 'PI'
// Math.PI = 3; // because it has `writable: false`

// TypeError: Cannot delete property 'PI'
// delete Math.PI; // won't work either

// We also can't change `Math.PI` to be writable again:

// TypeError: Cannot redefine property: PI, because of `configurable: false`
// Object.defineProperty(Math, "PI", { writable: true });

// NOTE: `configurable: false` prevents changes of property flags and its
// deletion, while allowing to change its value:
let user = {
    name: "John",
};

// We make `user.name` non-configurable:
Object.defineProperty(user, "name", {
    configurable: false,
});

// but we can still change it (as it's writable)
user.name = "Pete"; // works fine
alert(user.name); // "Pete"
delete user.name; // Cannot delete property 'name'

// NOTE: The only attribute change possible: `writable` `true` -> `false`:
// We can change `writable`: `true` to `false` for a non-configurable property,
// thus preventing its `value` modification (to add another layer of
// protection). Not the other way around though.
