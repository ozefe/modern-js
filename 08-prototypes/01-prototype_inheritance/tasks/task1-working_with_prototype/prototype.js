let animal = {
    jumps: null,
};

let rabbit = {
    __proto__: animal,

    jumps: true,
};

alert(rabbit.jumps); // true, taken from `rabbit`
delete rabbit.jumps;

alert(rabbit.jumps); // null, taken from `animal`
delete animal.jumps;

alert(rabbit.jumps); // undefined
