// OR (`||`)
// result = a || b;
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

// works just like `if(true || false)`
if (1 || 0) {
    alert("truthy!");
}

// Most of the time, OR (`||`) is used in an `if` statement to test if any of
// the given conditions is `true`.
let hour = 9;
if (hour < 10 || hour > 18) {
    alert("The office is closed.");
}

hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
    alert("The office is closed."); // it is the weekend
}

alert(1 || 0); // 1 (1 is truthy)

alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)

alert(undefined || null || 0); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder

// Short-circuit evaluation example:
true || alert("not printed");
false || alert("printed");
