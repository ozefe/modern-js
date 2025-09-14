// There’s a built-in function `Math.max` that returns the greatest number from
// a list:
alert(Math.max(3, 5, 1)); // 5

// Passing an array "as is" won’t work, because `Math.max` expects a list of
// numeric arguments, not a single array:
alert(Math.max([3, 5, 1])); // NaN

// When `...arr` is used in the function call, it "expands" an iterable object
// `arr` into the list of arguments:
alert(Math.max(...[3, 5, 1])); // 5

// We also can pass multiple iterables this way:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(...arr1, ...arr2)); // 8

// We can even combine the spread syntax with normal values:
alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

// Also, the spread syntax can be used to merge arrays:
arr1 = [3, 5, 1];
arr2 = [8, 9, 15];

let merged = [0, ...arr1, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr1, then 2, then arr2)

// We can use the spread syntax to turn the string into array of characters:
let str = "Hello";

alert([...str]); // H,e,l,l,o

// The spread syntax internally uses iterators to gather elements, the same way
// as `for..of` does. So, for a string, `for..of` returns characters and
// `...str` becomes `"H","e","l","l","o"`. The list of characters is passed to
// array initializer `[...str]`.
