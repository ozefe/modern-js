// A "symbol" represents a unique identifier. A value of this type can be
// created using `Symbol()`:
let id = Symbol();

// Upon creation, we can give symbols a description (also called a symbol
// name), mostly useful for debugging purposes:
id = Symbol("id");

// Symbols are guaranteed to be unique. Even if we create many symbols with
// exactly the same description, they are different values. The description is
// just a label that doesn't affect anything:
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// NOTE: Symbols don't auto-convert to a string! This is a "language guard"
// against messing up, because strings and symbols are fundamentally different
// and should not accidentally convert one into another.
// alert(id); // TypeError: Cannot convert a Symbol value to a string

// If we really want to show a symbol, we need to explicitly call `.toString()`
// on it:
alert(id.toString()); // Symbol(id), now it works

// Or get `symbol.description` property to show the description only:
alert(id.description); // id
