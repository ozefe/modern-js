function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new Counter();

alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1
