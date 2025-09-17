let animal = {
    eat() {
        this.full = true;
    },
};

let rabbit = {
    __proto__: animal,
};

rabbit.eat();

alert(`Rabbit: ${rabbit.full}`); // true
alert(`Animal: ${animal.full}`); // undefined
