// Every function has the `prototype` property even if we don't supply it. The
// default `prototype` is an object with the only property `constructor` that
// points back to the function itself:
{
    function Rabbit() {}

    // Default prototype:
    // Rabbit.prototype = { constructor: Rabbit };

    // We can check it:
    alert(Rabbit.prototype.constructor === Rabbit); // true

    // Naturally, if we do nothing, the `constructor` property is available to
    // all rabbits through `[[Prototype]]`:
    let rabbit = new Rabbit(); // inherits from `{ constructor: Rabbit }`
    alert(rabbit.constructor == Rabbit); // true (from `prototype`)
}

// We can use `constructor` property to create a new object using the same
// `constructor` as the existing one:
{
    function Rabbit(name) {
        this.name = name;
        alert(name);
    }

    let rabbit1 = new Rabbit("White Rabbit");
    let rabbit2 = new rabbit1.constructor("Black Rabbit");

    // This is handy when we have an object, don't know which constructor was
    // used for it (e.g. it comes from a 3rd party library), and we need to
    // create another one of the same kind.
}

// The most important thing about `constructor` is that JavaScript itself does
// not ensure the right `constructor` value. Yes, it exists in the default
// `prototype` for functions, but that's all. What happens with it later is
// totally on us.
//
// In particular, if we replace the default `prototype` as a whole, then there
// will be no `constructor` in it:
{
    function Rabbit() {}

    // Replacing the default `prototype` (`{ constructor: Rabbit }`):
    Rabbit.prototype = {
        jumps: true,
    };

    let rabbit = new Rabbit();
    alert(rabbit.constructor === Rabbit); // false, becomes undefined === Rabbit
}

// So, to keep the right `constructor` we can choose to add/remove properties to
// the default `prototype` instead of overwriting it as a whole:
{
    function Rabbit() {}

    // Don't overwrite the default `prototype` completely, just add to it:
    Rabbit.prototype.jumps = true;

    // Or, alternatively, we can recreate the `constructor` property manually:
    Rabbit.prototype = {
        constructor: Rabbit,
        jumps: true,
    };

    // now constructor is also correct
}

// On regular objects the `prototype` is nothing special:
let user = {
    name: "John",
    prototype: "Bla-bla", // no magic at all
};
