let map = new Map();

map.set("name", "John");

let keys = map.keys();

// TypeError: keys.push is not a function
keys.push("more"); // map.keys() returns an iterable, not an array so it doesn't have the push() function

keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name,more
