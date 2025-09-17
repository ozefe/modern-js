// In JavaScript, objects have a special hidden property `[[Prototype]]` (as
// named in the specification), that is either `null` or references another
// object. That object is called "a prototype".
//
// When we read a property from `object`, and it's missing, JavaScript
// automatically takes it from the prototype. In programming, this is called
// "prototypal inheritance".
//
// The property `[[Prototype]]` is internal and hidden, but there are many ways
// to set it. One of them is to use the special name `__proto__`, like this:
{
    let animal = {
        eats: true,
    };
    let rabbit = {
        jumps: true,
    };

    // Here we can say that "animal is the prototype of rabbit" or "rabbit
    // prototypically inherits from animal". So if `animal` has a lot of useful
    // properties and methods, then they become automatically available in
    // `rabbit`. Such properties are called "inherited".
    rabbit.__proto__ = animal; // sets `rabbit.[[Prototype]] = animal`

    // Now if we read a property from `rabbit`, and it's missing, JavaScript
    // will automatically take it from `animal`:
    alert(rabbit.eats); // true, taken from `animal` through `rabbit.__proto__`
    alert(rabbit.jumps); // true
}

// If we have a method in `animal`, it can be called on `rabbit`:
{
    let animal = {
        eats: true,

        walk() {
            alert("Animal walk");
        },
    };

    let rabbit = {
        jumps: true,

        __proto__: animal,
    };

    // The method `walk()` is automatically taken from the prototype
    rabbit.walk(); // Animal walk
}

// The prototype chain can be longer:
{
    let animal = {
        eats: true,

        walk() {
            alert("Animal walk");
        },
    };

    let rabbit = {
        jumps: true,

        __proto__: animal,
    };

    let longEar = {
        earLength: 10,

        __proto__: rabbit,
    };

    // The method `walk()` is automatically taken from the prototype chain
    longEar.walk(); // Animal walk
    alert(longEar.jumps); // true (from `rabbit`)
}

// There are only two limitations:
// 1. The references can't go in circles. JavaScript will throw an error if we
// try to assign `__proto__` in a circle.
// 2. The value of `__proto__` can be either an `object` or `null`. Other types
//    are ignored.
// Also, there can be only one `[[Prototype]]`. An `object` may not inherit from
// two others.

// NOTE: `__proto__` is a historical getter/setter for `[[Prototype]]`: Note
// that `__proto__` is not the same as the internal `[[Prototype]]` property.
// It's a getter/setter for `[[Prototype]]`.
//
// The `__proto__` property is a bit outdated. It exists for historical reasons,
// modern JavaScript suggests that we should use
// `Object.getPrototypeOf`/`Object.setPrototypeOf` functions instead that
// get/set the prototype.
//
// By the specification, `__proto__` must only be supported by browsers. In fact
// though, all environments including server-side support `__proto__`, so we're
// quite safe using it.
