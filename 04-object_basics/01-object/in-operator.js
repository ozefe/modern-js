// Reading a non-existing property just returns undefined. So we can easily
// test whether the property exists:
let user = {};

// true means "no such property"
alert(`No such property exists: ${user.noSuchProperty === undefined}`);

// There's also a special operator "in" for that:
// "key" in object
user = { name: "John", age: 30 };

alert(`user.age exists: ${"age" in user}`); // true, user.age exists

// false, user.blabla doesn't exist
alert(`user.blabla exists: ${"blabla" in user}`);

// If we omit quotes, that means a variable should contain the actual name to
// be tested:
let key = "age";
alert(`Key exists: ${key in user}`); // true, property "age" exists

// Situations like this happen very rarely, because undefined should not be
// explicitly assigned. We mostly use null for "unknown" or "empty" values. So
// the in operator is an exotic guest in the code.
obj = {
    test: undefined,
};

alert(obj.test); // it's undefined, so -- no such property?
alert("test" in obj); // true, the property does exist!
