// Sometimes it's beneficial to replace a code piece with a function:
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        // check if i is a prime number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert(i);
    }
}

// The better variant, with a factored out function `isPrime`:
function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }

    return true;
}

// Now we can understand the code easily. The function itself becomes the
// comment. Such code is called self-descriptive.
