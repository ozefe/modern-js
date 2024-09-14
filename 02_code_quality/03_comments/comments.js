function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(n)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i) return false;
  }

  return true;
}

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise
 * @param {number} n The power, must be a natural number
 * @return {number} x raised to the n-th power
 */
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
