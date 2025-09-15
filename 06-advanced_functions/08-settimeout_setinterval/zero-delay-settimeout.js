// There's a special use case: `setTimeout(func, 0)`, or just
// `setTimeout(func)`. This schedules the execution of `func` as soon as
// possible. But the scheduler will invoke it only after the currently executing
// script is complete. So the function is scheduled to run "right after" the
// current script.

// This outputs "Hello", then immediately "World":
setTimeout(() => alert("World"));
alert("Hello");

// NOTE: Zero delay is in fact not zero (in a browser): In the browser, there's
// a limitation of how often nested timers can run. The HTML Living Standard
// says: "after five nested timers, the interval is forced to be at least 4 milliseconds.".
//
// The `setTimeout` call in it re-schedules itself with zero delay. Each call
// remembers the real time from the previous one in the times array. What do the
// real delays look like? Let's see:
{
    let start = Date.now();
    let times = [];

    setTimeout(function run() {
        times.push(Date.now() - start); // remember delay from the previous call

        // show the delays after 100ms
        if (start + 100 < Date.now()) console.log(times);
        else setTimeout(run); // else re-schedule
    });

    // an example of the output:
    // [0,1,1,4,4,4,8,13,17,25,34,42,50,58,67,75,83,92,100,108]
}
// First timers run immediately (just as written in the spec), and then we see
// 9, 15, 20, 24, ... The 4+ ms obligatory delay between invocations comes into
// play. The similar thing happens if we use `setInterval` instead of
// `setTimeout`: `setInterval(f)` runs `f` few times with zero-delay, and
// afterwards with 4+ ms delay.
//
// This limitation comes from ancient times and many scripts rely on it, so it
// exists for historical reasons. For server-side JavaScript, this limitation
// does not exist, and there are other ways to schedule an immediate
// asynchronous job, like `setImmediate` for Node.js. So this note is
// browser-specific.
