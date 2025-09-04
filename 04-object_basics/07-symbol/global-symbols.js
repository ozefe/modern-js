// Sometimes we want same-named symbols to be same entities. For instance,
// different parts of our application want to access symbol "id" meaning
// exactly the same property.
//
// To achieve that, there exists a global symbol registry. We can create
// symbols in it and access them later, and it guarantees that repeated
// accesses by the same name return exactly the same symbol.
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert(id === idAgain); // true

// To do the opposite, return a name by global symbol, we can use:
// `Symbol.keyFor(sym)`:
// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id

// The `Symbol.keyFor` internally uses the global symbol registry to look up
// the key for the symbol. So it doesn't work for non-global symbols. If the
// symbol is not global, it won't be able to find it and returns undefined.
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert(Symbol.keyFor(globalSymbol)); // name, global symbol
alert(Symbol.keyFor(localSymbol)); // undefined, not global

alert(localSymbol.description); // name
