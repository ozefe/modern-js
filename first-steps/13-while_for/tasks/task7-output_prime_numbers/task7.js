let primeUpperLimit = +prompt(
    "Please provide an upper limit for prime calculation: ",
    10
);

integers: for (let i = 2; i <= primeUpperLimit; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue integers;
    }
    alert(`${i} is prime!`);
}
