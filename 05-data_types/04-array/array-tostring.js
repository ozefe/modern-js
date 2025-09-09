// Arrays have their own implementation of `toString` method that returns a
// comma-separated list of elements:
let arr = [1, 2, 3];

alert(arr); // 1,2,3
alert(String(arr) === "1,2,3"); // true

// Tricky:
alert([] + 1); // "1"
alert([1] + 1); // "11"
alert([1, 2] + 1); // "1,21"

// Arrays do not have `Symbol.toPrimitive`, neither a viable `valueOf`, they
// implement only `toString` conversion, so here `[]` becomes an empty string,
// `[1]` becomes `"1"` and `[1, 2]` becomes `"1,2"`.
