let i = 0;

// this will run after the loop
setTimeout(() => alert(i), 1); // will output 100'000'000

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100_000_000; j++) {
    i++;
}
