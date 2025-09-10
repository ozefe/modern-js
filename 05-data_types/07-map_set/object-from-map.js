// `Object.fromEntries`: Given an array of `[key, value]` pairs, it creates an
// object from them.
let prices = Object.fromEntries([
    ["banana", 1],
    ["orange", 2],
    ["meat", 4],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2

let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

let obj = Object.fromEntries(map.entries()); // make a plain object
// let obj = Object.fromEntries(map); // we can omit .entries()

// done!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2
