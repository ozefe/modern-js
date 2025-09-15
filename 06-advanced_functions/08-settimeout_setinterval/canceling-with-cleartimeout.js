// A call to `setTimeout` returns a "timer identifier" `timerId` that we can use
// to cancel the execution. The syntax to cancel:
// let timerId = setTimeout(...);
// clearTimeout(timerId);

// We schedule the function and then cancel it (changed our mind). As a result,
// nothing happens:
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

// In a browser the timer identifier is a number. In other environments, this
// can be something else. For instance, Node.js returns a timer object with
// additional methods.
