// If you are writing several “helper” functions and the code that uses them,
// there are three ways to organize the functions. Most of time, the second
// variant is preferred.

// 1. Declare the functions above the code that uses them:
// function declarations
function createElement() {
    //   ...
}

function setHandler(elem) {
    //   ...
}

function walkAround() {
    //   ...
}

// the code which uses them
let elem = createElement();
setHandler(elem);
walkAround();

// 2. Code first, then functions:
// the code which uses the functions
elem = createElement();
setHandler(elem);
walkAround();

// --- helper functions ---
function createElement() {
    //   ...
}

function setHandler(elem) {
    //   ...
}

function walkAround() {
    //   ...
}

// 3. Mixed: a function is declared where it's first used.
