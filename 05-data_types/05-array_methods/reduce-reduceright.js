// let value = arr.reduce(
//     function (accumulator, item, index, array) {
//         // ...
//     },
//     [initial]
// );
// The function is applied to all array elements one after another and
// "carries on" its result to the next call. As the function is applied, the
// result of the previous function call is passed to the next one as the first
// argument.

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

// removed initial value from reduce (no 0)
result = arr.reduce((sum, current) => sum + current);
alert(result); // 15

// The result is the same. That's because if there's no initial, then reduce
// takes the first element of the array as the initial value and starts the
// iteration from the 2nd element. But such use requires an extreme care. If
// the array is empty, then reduce call without initial value gives an error:
arr = [];

// Error: Reduce of empty array with no initial value. If the initial value
// existed, reduce would return it for the empty `arr`.
arr.reduce((sum, current) => sum + current);
