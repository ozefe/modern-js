let n = prompt("Calculate all the prime numbers until: ", "10") ?? 10;
outer: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue outer;
    }

    alert(i);
}
