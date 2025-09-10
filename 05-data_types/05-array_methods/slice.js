// `arr.slice([start], [end])`: Returns a new array copying to it all items
// from index `start` to `end` (not including `end`). Both `start` and `end`
// can be negative, in that case position from array end is assumed.
let arr = ["t", "e", "s", "t"];

alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arr.slice(-2)); // s,t (copy from -2 till the end)

// We can also call it without arguments: `arr.slice()` creates a copy of
// `arr`. That's often used to obtain a copy for further transformations that
// should not affect the original array.
