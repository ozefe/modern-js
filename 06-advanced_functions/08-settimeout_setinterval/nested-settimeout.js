// There are two ways of running something regularly. One is `setInterval`, and
// the other one is a nested `setTimeout`:
// instead of:
// let timerId = setInterval(() => alert("tick"), 2000);

{
    let timerId = setTimeout(function tick() {
        alert("tick");
        timerId = setTimeout(tick, 2000);
    }, 2000);

    // Kill it after 7 seconds:
    setTimeout(clearTimeout(timerId), 7000);
}

// The nested `setTimeout` is a more flexible method than `setInterval`. This
// way the next call may be scheduled differently, depending on the results of
// the current one. For instance, we need to write a service that sends a
// request to the server every 5 seconds asking for data, but in case the server
// is overloaded, it should increase the interval to 10, 20, 40 seconds...
// let delay = 500;
{
    let timerId = setTimeout(function request() {
        // Randomize the "sending request to the server" failed state
        let requestFailed = Math.random() > 0.5 ? true : false;

        // request failed due to server overload
        if (requestFailed) {
            // increase the interval to the next run
            delay *= 2;
        }

        timerId = setTimeout(request, delay);

        alert(`Delay: ${delay}ms`);
    }, delay);

    // Kill it after 5 seconds:
    setTimeout(clearTimeout(timerId), 5000);
}

// And if the functions that we’re scheduling are CPU-hungry, then we can
// measure the time taken by the execution and plan the next call sooner or
// later.

// NOTE: Nested `setTimeout` allows to set the delay between the executions more
// precisely than `setInterval`:
function func(n) {
    alert(n);
}

// This schedules a call to `func` every 100ms, but the time taken by `func`'s
// execution consumes a part of the interval, so in practice the real interval
// between the function calls are almost always less than the set interval
// (100ms in this case).
{
    let i = 1;
    let timerId = setInterval(function () {
        func(i++);
    }, 100);

    // Kill it after 5 seconds:
    setTimeout(clearInterval(timerId), 5000);
}

// The nested `setTimeout` guarantees the fixed delay (here 100ms). That’s
// because a new call is planned at the end of the previous one.
{
    let i = 1;
    let timerId = setTimeout(function run() {
        func(i++);
        setTimeout(run, 100);
    }, 100);

    // Kill it after 5 seconds:
    setTimeout(clearTimeout(timerId), 5000);
}

// NOTE: Garbage collection and `setInterval`/`setTimeout` callback: When a
// function is passed in `setInterval`/`setTimeout`, an internal reference is
// created to it and saved in the scheduler. It prevents the function from being
// garbage collected, even if there are no other references to it.
//
// the function stays in memory until the scheduler calls it
// setTimeout(function () {
//     /* some processing... */
// }, 100);
//
// For `setInterval`, the function stays in memory until `clearInterval` is
// called.
//
// There’s a side effect. A function references the outer lexical environment,
// some, while it lives, outer variables live too. They may take much more
// memory than the function itself. So when we don't need the scheduled function
// anymore, it's better to cancel it, even if it's very small.

