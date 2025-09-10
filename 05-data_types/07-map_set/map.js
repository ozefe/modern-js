// Map: Main difference from an object is that Map allows keys of any type.
// `new Map()`: creates the map.
// `map.set(key, value)`: stores the `value` by the `key`.
// `map.get(key)`: returns the value by the `key`, `undefined` if key doesn't
// exist in `map`.
// `map.has(key)`: returns `true` if the `key` exists, `false` otherwise.
// `map.delete(key)`: removes the element (the key/value pair) by the `key`.
// `map.clear()`: removes everything from the `map`.
// `map.size`: returns the current element count.
let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// the regular Object would convert keys to string, but Map keeps the type, so
// these two are different:
alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'

alert(map.size); // 3

// NOTE: `map[key]` isn't the right way to use a Map: Although `map[key]` also
// works, e.g. we can set `map[key] = 2`, this is treating map as a plain
// JavaScript object, so it implies all corresponding limitations
// (only string/symbol keys and so on).

// Map can also use objects as keys:
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); // 123

// We can't use another Object as a key in Object:
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key

// try to use john object as the key, ben object will get replaced
visitsCountObj[john] = 123;

// That's what got written!
alert(visitsCountObj["[object Object]"]); // 123
