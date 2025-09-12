// There's a special method `Date.now()` that returns the current timestamp. It
// is semantically equivalent to `new Date().getTime()`, but it doesn't create
// an intermediate `Date` object. So it's faster and doesn't put pressure on
// garbage collection.
let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = Date.now(); // done

alert(`The loop took ${end - start} ms`); // subtract numbers, not dates
