function makeWorker() {
    let name = "Pete";

    return function () {
        alert(name);
    };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // "Pete"
