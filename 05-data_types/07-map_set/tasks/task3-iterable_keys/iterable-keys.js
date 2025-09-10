let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Because `keys` is a `MapIterator`, not an array, thus it doesn't have a
// `.push` method.
// keys.push("more");

// We can convert it to an array:
let keys_array = Array.from(keys);

// And then use it:
keys_array.push("more");

// And now we can see:
alert(`Keys: ${keys_array}`);

// Note that map.keys() didn't change:
for (let key of map.keys()) alert(`Key: ${key}`);
