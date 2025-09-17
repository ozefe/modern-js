let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    },
};

let speedy = {
    __proto__: hamster,

    stomach: [],
};

let lazy = {
    __proto__: hamster,

    stomach: [],
};

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one is still hungry
alert(lazy.stomach); // apple
