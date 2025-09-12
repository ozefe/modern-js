let factorial = (n) => (n == 1 ? 1 : n * factorial(n - 1));

alert(`1! = ${factorial(1)} (Should be: 1)`);
alert(`2! = ${factorial(2)} (Should be: 2)`);
alert(`3! = ${factorial(3)} (Should be: 6)`);
alert(`4! = ${factorial(4)} (Should be: 24)`);
alert(`5! = ${factorial(5)} (Should be: 120)`);
