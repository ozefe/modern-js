// When a `Date` object is converted to number, it becomes the timestamp same as
// `date.getTime()`:
alert(`Date to number: ${+new Date()}`); // the number of milliseconds

// The important side effect: dates can be subtracted, the result is their
// difference in ms:
let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

alert(`The loop took ${end - start} ms`);
