// If we're working with an object that "belongs" to another code, maybe even a
// third-party library, and would like to store some data associated with it,
// that should only exist while the object is alive -- then WeakMap is exactly
// what's needed.
//
// We put the data to a WeakMap, using the object as the key, and when the
// object is garbage collected, that data will automatically disappear as well.

let john = { name: "John" };
let eve = { name: "Eve" };

countUser(john); // count his visits
countUserWeak(eve); // count her visits

// later john and eve leaves us
john = null;
eve = null;

// Now, `john` object should be garbage collected, but remains in memory, as
// it's a key in `visitsCountMap`.

// After `eve` object becomes unreachable, by all means except as a key of
// `WeakMap`, it gets removed from memory, along with the information by that
// key from `WeakMap`.
