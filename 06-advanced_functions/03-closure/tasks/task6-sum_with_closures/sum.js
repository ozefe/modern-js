function sum(a) {
    return function (b) {
        return a + b;
    };
}

alert(`1 + 2 = ${sum(1)(2)}`);
alert(`5 + (-1) = ${sum(5)(-1)}`);
