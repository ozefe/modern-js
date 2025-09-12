let cache = new Map();
function fib(n) {
    if (n < 2) return n;

    let n1 = n - 1;
    let n2 = n - 2;

    if (!cache.has(n1)) cache.set(n1, fib(n1));
    if (!cache.has(n2)) cache.set(n2, fib(n2));

    return cache.get(n1) + cache.get(n2);
}

alert(`F_2 = ${fib(3)} (Should be: 2)`); // 2
alert(`F_7 = ${fib(7)} (Should be: 13)`); // 13
alert(`F_77 = ${fib(77)} (Should be: 5527939700884757)`); // 5527939700884757
