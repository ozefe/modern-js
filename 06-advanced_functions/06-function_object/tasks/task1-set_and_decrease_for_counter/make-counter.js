function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (value) => (count = value);
    counter.decrease = () => --count;

    return counter;
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter.decrease()); // 1
alert(counter.set(10)); // undefined
alert(counter()); // 10
