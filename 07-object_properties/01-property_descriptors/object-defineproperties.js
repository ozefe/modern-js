"use strict";

// This method allows to define many properties at once:
// Object.defineProperties(obj, {
//     prop1: descriptor1,
//     prop2: descriptor2,
//     // ...
// });

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

console.log(JSON.stringify(user, null, 4));
/*
{
    "name": "John",
    "surname": "Smith"
}
*/
