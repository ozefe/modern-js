// returns a wrapper, delaying the call by `ms` milliseconds
Function.prototype.defer = function (ms) {
    let outerFunction = this;
    return function (...args) {
        // we use `this` in here to make our decoration work for object methods.
        setTimeout(() => outerFunction.apply(this, args), ms);
    };
};

function f(a, b) {
    alert(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 second

let user = {
    name: "John",
    sayHi() {
        alert(this.name);
    },
};

user.sayHi = user.sayHi.defer(2000);
user.sayHi();
