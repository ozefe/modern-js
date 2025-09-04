// If there's no `Symbol.toPrimitive` then JavaScript tries to find methods
// `toString` and `valueOf`:
//   - For the "string" hint: call `toString` method, and if it doesn't exist
//     or if it returns an object instead of a primitive value, then call
//     `valueOf` (so `toString` has the priority for string conversions).
//   - For other hints: call `valueOf`, and if it doesn't exist or if it
//     returns an object instead of a primitive value, then call `toString` (so
//     `valueOf` has the priority for maths).

// By default, a plain object has following `toString` and `valueOf` methods:
//   - The `toString` method returns a string "[object Object]".
//   - The `valueOf` method returns the object itself.
let user = { name: "John" };

alert(user); // [object Object]
alert(user.valueOf() === user); // true

user = {
    name: "John",
    money: 1000,

    // for hint="string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf() {
        return this.money;
    },
};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

// Often we want a single "catch-all" place to handle all primitive
// conversions. In this case, we can implement `toString` only, like this:
user = {
    name: "John",

    toString() {
        return this.name;
    },
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500
