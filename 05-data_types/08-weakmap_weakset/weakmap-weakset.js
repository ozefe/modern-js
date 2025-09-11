let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory

john = { name: "John" };

let array = [john];

john = null; // overwrite the reference

// the object previously referenced by john is stored inside the array therefore
// it won't be garbage-collected. we can get it as array[0]:
alert(`Object in array: ${array[0].name}`);

john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john is stored inside the map, we can get it by using map.keys():
for (let key of map.keys()) alert(`Object key in map: ${key.name}`);
