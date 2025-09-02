// if we have a long "code sheet" like this:
// here we add whiskey
for (let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    smell(drop);
    add(drop, glass);
}

// here we add juice
for (let t = 0; t < 3; t++) {
    let tomato = getTomato();
    examine(tomato);
    let juice = press(tomato);
    add(juice, glass);
}

// ...

// Then it might be a better variant to refactor it into functions:
addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
    for (let i = 0; i < 10; i++) {
        let drop = getWhiskey();
        //...
    }
}

function addJuice(container) {
    for (let t = 0; t < 3; t++) {
        let tomato = getTomato();
        //...
    }
}

// Functions themselves tell what's going on. There's nothing to comment. And
// also the code structure is better when split. It's clear what every function
// does, what it takes and what it returns.
