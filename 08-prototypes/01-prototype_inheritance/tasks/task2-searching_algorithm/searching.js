let head = {
    glasses: 1,
};

let table = {
    __proto__: head,

    pen: 3,
};

let bed = {
    __proto__: table,

    sheet: 1,
    pillow: 2,
};

let pockets = {
    __proto__: bed,

    money: 2000,
};

alert(pockets.pen === 3);
alert(bed.glasses === 1);

// Benchmarking:
let totalDirectTime = 0;
let totalIndirectTime = 0;

function benchmarkFunction(func) {
    let startDate = new Date();

    func();

    return new Date() - startDate;
}

// Warming up:
for (let i = 0; i < 1000; i++) {
    benchmarkFunction(() => console.log(head.glasses));
    benchmarkFunction(() => console.log(pockets.glasses));
}

// Measure:
for (let i = 0; i < 100_000; i++) {
    // We're doing `console.log` otherwise v8 will probably optimize it.
    totalDirectTime += benchmarkFunction(() => console.log(head.glasses));
    totalIndirectTime += benchmarkFunction(() => console.log(pockets.glasses));
}

// Results:
alert(`Results:
    Total Indirect Access Time: ${totalIndirectTime}ms
    Total Direct Access Time: ${totalDirectTime}ms`); // pretty much the same

// There is no real difference performance-wise.
