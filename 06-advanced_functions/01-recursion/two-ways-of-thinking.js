function powIterative(x, n) {
    let result = 1;

    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

alert(powIterative(2, 2) === 4);
alert(powIterative(2, 3) === 8);
alert(powIterative(2, 4) === 16);

function powRecursive(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * powRecursive(x, n - 1);
    }
}

// A little bit code-golfing wouldn't hurt anyone:
powRecursive = (x, n) => (n == 1 ? x : x * powRecursive(x, n - 1));

alert(powRecursive(2, 2) === 4);
alert(powRecursive(2, 3) === 8);
alert(powRecursive(2, 4) === 16);
