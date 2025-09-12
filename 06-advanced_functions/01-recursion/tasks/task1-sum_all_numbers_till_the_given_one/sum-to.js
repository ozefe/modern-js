function sumToIterative(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) sum += i;

    return sum;
}

alert(`Iterative 1: ${sumToIterative(1) === 1}`);
alert(`Iterative 2: ${sumToIterative(2) === 3}`);
alert(`Iterative 3: ${sumToIterative(3) === 6}`);
alert(`Iterative 4: ${sumToIterative(4) === 10}`);
alert(`Iterative 100: ${sumToIterative(100) === 5050}`);

let sumToRecursive = (n) => (n == 1 ? 1 : n + sumToRecursive(n - 1));

alert(`Recursive 1: ${sumToRecursive(1) === 1}`);
alert(`Recursive 2: ${sumToRecursive(2) === 3}`);
alert(`Recursive 3: ${sumToRecursive(3) === 6}`);
alert(`Recursive 4: ${sumToRecursive(4) === 10}`);
alert(`Recursive 100: ${sumToRecursive(100) === 5050}`);

let sumToArithmeticProgression = (n) => (n * (n + 1)) / 2;

alert(`Arithmetic Progression 1: ${sumToArithmeticProgression(1) === 1}`);
alert(`Arithmetic Progression 2: ${sumToArithmeticProgression(2) === 3}`);
alert(`Arithmetic Progression 3: ${sumToArithmeticProgression(3) === 6}`);
alert(`Arithmetic Progression 4: ${sumToArithmeticProgression(4) === 10}`);
alert(
    `Arithmetic Progression 100: ${sumToArithmeticProgression(100) === 5050}`
);

// Benchmarking:
let iterativeTime = 0;
let recursiveTime = 0;
let arithmeticProgressionTime = 0;

function benchmarkFunction(func, value) {
    let startTime = new Date();

    func(value);

    return new Date() - startTime;
}

// Warming up:
sumToIterative(5000);
sumToRecursive(5000);
sumToArithmeticProgression(5000);

for (let i = 0; i < 10; i++) {
    iterativeTime += benchmarkFunction(sumToIterative, 5000);
    recursiveTime += benchmarkFunction(sumToRecursive, 5000);
    arithmeticProgressionTime += benchmarkFunction(
        sumToArithmeticProgression,
        5000
    );
}

alert(`Iterative total: ${iterativeTime}ms
Iterative average: ${iterativeTime / 10}ms`);

alert(`Recursive total: ${recursiveTime}ms
Recursive average: ${recursiveTime / 10}ms`);

alert(`Arithmetic progression total: ${arithmeticProgressionTime}ms
Arithmetic progression average: ${arithmeticProgressionTime / 10}ms`);

// Let's see if we can use recursion to count up to 100'000 (not a chance):
alert(`Testing recursion for 100'000: ${sumToRecursive(100_000)}`);
