// let results = arr.filter(function (item, index, array) {
//     // if true item is pushed to results and the iteration continues
//     // returns empty array if nothing found
// });

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);
alert(someUsers.length); // 2
