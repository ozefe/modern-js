// let result = arr.find(function (item, index, array) {
//     // if true is returned, item is returned and iteration is stopped
//     // for falsy scenario returns undefined
// });

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" },
];
let user = users.find((item) => item.id == 1);

alert(user.name); // John

// The `arr.findIndex` method has the same syntax but returns the index where
// the element was found instead of the element itself. The value of -1 is
// returned if nothing is found:
// Find the index of the first John
alert(users.findIndex((user) => user.name == "John")); // 0

// The `arr.findLastIndex` method is like `findIndex`, but searches from right
// to left, similar to `lastIndexOf`:
// Find the index of the last John
alert(users.findLastIndex((user) => user.name == "John")); // 3
