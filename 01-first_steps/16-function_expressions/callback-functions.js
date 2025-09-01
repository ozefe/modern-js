// Callback functions
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
// The arguments showOk and showCancel of ask are called callback functions or
// just callbacks. The idea is that we pass a function and expect it to be
// "called back" later if necessary.
ask("Do you agree?", showOk, showCancel);

// We can use Function Expressions to write an equivalent, shorter function:
ask(
    "Do you agree?",
    function () {
        alert("You agreed.");
    },
    function () {
        alert("You canceled the execution.");
    }
);
