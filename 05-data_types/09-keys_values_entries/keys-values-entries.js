// For plain objects, the following methods are available:
// `Object.keys(obj)`: returns an array of keys.
// `Object.values(obj)`: returns an array of values.
// `Object.entries(obj)`: returns an array of `[key, value]` pairs.

let user = {
    name: "John",
    age: 30,
};

alert(`Keys: ${Object.keys(user)}`); // name,age
alert(`Values: ${Object.values(user)}`); // John,30
alert(`Entries: ${Object.entries(user)}`); // name,John,age,30

// loop over values
for (let value of Object.values(user)) {
    alert(value); // John, then 30
}

// NOTE: Object.keys/values/entries ignore symbolic properties: Just like a
// `for..in` loop, these methods ignore properties that use `Symbol(...)` as
// keys.
