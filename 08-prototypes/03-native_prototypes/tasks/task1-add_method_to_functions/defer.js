// runs the function after `ms` milliseconds.
Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

function f() {
    alert("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 second
