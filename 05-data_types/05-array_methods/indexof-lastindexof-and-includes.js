// `arr.indexOf(item, from)`: looks for `item` starting from index `from`, and
// returns the index where it was found, otherwise -1.
// `arr.includes(item, from)`: looks for `item` starting from index `from`,
// returns true if found.
let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1

alert(arr.includes(1)); // true

// The method `arr.lastIndexOf` is the same as `indexOf`, but looks for from
// right to left:
let fruits = ["Apple", "Orange", "Apple"];

alert(fruits.indexOf("Apple")); // 0 (first Apple)
alert(fruits.lastIndexOf("Apple")); // 2 (last Apple)

// NOTE: The `includes` method handles `NaN` correctly:
arr = [NaN];

alert(arr.indexOf(NaN)); // -1 (wrong, should be 0)
alert(arr.includes(NaN)); // true (correct)

// That's because `includes` was added to JavaScript much later and uses the
// more up-to-date comparison algorithm internally.
