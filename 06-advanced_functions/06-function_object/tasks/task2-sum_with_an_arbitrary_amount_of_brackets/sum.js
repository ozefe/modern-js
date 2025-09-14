function sum(a) {
    let totalSum = +a;

    function add(b) {
        totalSum += +b;
        return add;
    }

    add[Symbol.toPrimitive] = (hint) => totalSum;

    return add;
}

alert(sum(1)(2)); // 3
alert(sum(1)(2)(3)); // 6
alert(sum(5)(-1)(2)); // 6
alert(sum(6)(-1)(-2)(-3)); // 0
alert(sum(0)(1)(2)(3)(4)(5)); // 15
