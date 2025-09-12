// we have date1 and date2, which function faster returns their difference in
// milliseconds?

function diffSubtract(date1, date2) {
    return date2 - date1;
}

// or
function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

alert(`Time of diffSubtract: ${bench(diffSubtract)}ms`); // ~15ms
alert(`Time of diffGetTime: ${bench(diffGetTime)}ms`); // ~3ms

// Imagine that at the time of running `bench(diffSubtract)` CPU was doing
// something in parallel, and it was taking resources. And by the time of
// running `bench(diffGetTime)` that work has finished. A pretty real scenario
// for a modern multi-process OS. As a result, the first benchmark will have
// less CPU resources than the second. That may lead to wrong results. For more
// reliable benchmarking, the whole pack of benchmarks should be rerun multiple
// times:
let time1 = 0;
let time2 = 0;

// Modern JavaScript engines start applying advanced optimizations only to
// "hot code" that executes many times (no need to optimize rarely executed
// things). So, in the example above, first executions are not well-optimized.
// We may want to add a heat-up run:
bench(diffSubtract);
bench(diffGetTime);

// run `bench(diffSubtract)` and `bench(diffGetTime)` each 10 times, alternating
for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

alert(`Total time for diffSubtract: ${time1}ms`); // ~100ms
alert(`Total time for diffGetTime: ${time2}ms`); // ~7ms
