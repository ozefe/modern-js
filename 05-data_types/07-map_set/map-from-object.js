// array of [key, value] pairs
let map = new Map([
    ["1", "str1"],
    [1, "num1"],
    [true, "bool1"],
]);

alert(map.get("1")); // str1

// If we have a plain object, and we'd like to create a Map from it, then we can
// use built-in method `Object.entries(obj)` that returns an array of key/value
// pairs for an object exactly in that format.
let obj = {
    name: "John",
    age: 30,
};

// Here, `Object.entries` returns the array of key/value pairs:
// `[ ["name","John"], ["age", 30] ]`
map = new Map(Object.entries(obj));

alert(map.get("name")); // John
