// - It is analogous to `Set`, but we may only add objects to `WeakSet`
//   (not primitives).
// - An object exists in the set while it is reachable from somewhere else.
// - Like `Set`, it supports `add`, `has` and `delete`, but not `size`, `keys()`
//   and no iterations.

// Being "weak", it also serves as additional storage. But not for arbitrary
// data, rather for "yes/no" facts. A membership in `WeakSet` may mean something
// about the object:
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
