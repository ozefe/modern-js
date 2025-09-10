// To make the `range` object iterable (and thus let `for..of` work) we need to
// add the `Symbol.iterator` method to the object:
//   1. When `for..of` starts, it calls that method once (or errors if not
//      found). The method must return an iterator -- an object with the method
//      `next`.
//   2. Onward, `for..of` works only with that returned object.
//   3. When `for..of` wants the next value, it calls `next()` on that object.
//   4. The result of `next()` must have the form `{done: Boolean, value: any}`,
//      where `done=true` means that the loop is finished, otherwise `value` is
//      the next value.

// We want the `for..of` to work:
// for(let num of range) ... num=1,2,3,4,5
let range = {
    from: 1,
    to: 5,
};

// 1. call to `for..of` initially calls this
range[Symbol.iterator] = function () {
    // 2. Onward, `for..of` works only with the iterator object below, asking it
    // for next values
    return {
        current: this.from,
        last: this.to,

        // 3. `next()` is called on each iteration by the `for..of` loop
        next() {
            // 4. it should return the value as an object:
            // `{done:.., value :...}`
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        },
    };
};

// now it works!
for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}
