// Descriptors for accessor properties are different from those for data
// properties. For accessor properties, there is no `value` or `writable`, but
// instead there are `get` and `set` functions. An accessor descriptor may have:
// - `get`: a function without arguments, that works when a property is read.
// - `set`: a function with one argument, that is called when the property is
//   set.
// - `enumerable`: same as for data properties.
// - `configurable`: same as for data properties.
let user = {
    name: "John",
    surname: "Smith",
};

// Creating an accessor `fullName` using `Object.defineProperty`
Object.defineProperty(user, "fullName", {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    },
});

alert(user.fullName); // John Smith

for (let key in user) alert(key); // name, surname

// NOTE: A property can be either an accessor (has `get`/`set` methods) or a
// data property (has a `value`), not both. If we try to supply both `get` and
// `value` in the same descriptor, there will be an error:
// TypeError: Invalid property descriptor. Cannot both specify accessors and a
// value or writable attribute
Object.defineProperty({}, "prop", {
    get() {
        return 1;
    },

    value: 2,
});
