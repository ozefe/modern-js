let user = {
    name: "John",
    toString() {
        return this.name;
    },
};

// Normally, a built-in `toString` for objects is non-enumerable, it does not
// show up in `for...in`. But if we add a `toString` of our own, then by default
// it shows up in `for...in`:
// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString

// We can set `enumerable:false`, then it won't appear in a `for...in` loop,
// just like the built-in one:
Object.defineProperty(user, "toString", {
    enumerable: false,
});

// Now our `toString` disappears:
for (let key in user) alert(key); // name

// Non-enumerable properties are also excluded from `Object.keys`:
alert(Object.keys(user)); // name
