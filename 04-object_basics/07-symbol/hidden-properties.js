// Symbols allow us to create "hidden" properties of an object, that no other
// part of code can accidentally access or overwrite:
// belongs to another code
let user = {
    name: "John",
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]); // we can access the data using the symbol as the key

// If we want to use a symbol in an object literal {...}, we need square
// brackets around it:
user = {
    name: "John",
    age: 30,
    [id]: 123, // not "id": 123
};

// Symbolic properties do not participate in for..in loop.
for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert(`Direct: ${user[id]}`); // Direct: 123

// `Object.keys(user)` also ignores them. That's a part of the general "hiding
// symbolic properties" principle. If another script or a library loops over
// our object, it won't unexpectedly access a symbolic property.

// In contrast, `Object.assign` copies both string and symbol properties:
let clone = Object.assign({}, user);
alert(clone[id]); // 123
// The idea is that when we clone an object or merge objects, we usually want
// all properties to be copied (including symbols like id).
