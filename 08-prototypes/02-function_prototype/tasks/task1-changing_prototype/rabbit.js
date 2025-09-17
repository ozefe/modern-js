function Rabbit() {}

{
    Rabbit.prototype = {
        eats: true,
    };

    let rabbit = new Rabbit();

    alert(rabbit.eats); // true
}

{
    Rabbit.prototype = {
        eats: true,
    };

    let rabbit = new Rabbit();

    Rabbit.prototype = {};

    // changing the `prototype` of the constructor after we use it to create the
    // `rabbit` object does not affect the `rabbit` object at all -- it affects
    // only the newly created objects.
    alert(rabbit.eats); // true
}

{
    Rabbit.prototype = {
        eats: true,
    };

    let rabbit = new Rabbit();

    Rabbit.prototype.eats = false;

    alert(rabbit.eats); // false
}

{
    Rabbit.prototype = {
        eats: true,
    };

    let rabbit = new Rabbit();

    // This tries to delete `eats` property of the `rabbit` object, but the
    // `rabbit` never had such property -- `eats` belongs to the
    // `Rabbit.prototype`.
    delete rabbit.eats;

    alert(rabbit.eats); // true
}

{
    Rabbit.prototype = {
        eats: true,
    };

    let rabbit = new Rabbit();

    delete Rabbit.prototype.eats;

    alert(rabbit.eats); // undefined
}
