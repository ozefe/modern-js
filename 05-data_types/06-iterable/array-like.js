// Iterables: Objects that implement the `Symbol.iterator` method.
// Array-likes: Objects that have indexes and `length`, so they look like
// arrays.

let arrayLike = {
    // has indexes and `length` => array-like
    0: "Hello",
    1: "World",
    length: 2,
};

// Error (no `Symbol.iterator`)
for (let item of arrayLike) {
    alert(item);
}
