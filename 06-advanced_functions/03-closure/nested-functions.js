// A function is called "nested" when it is created inside another function:
function sayHiBye(firstName, lastName) {
    // helper nested function to use below
    function getFullName() {
        return firstName + " " + lastName;
    }

    alert("Hello, " + getFullName());
    alert("Bye, " + getFullName());
}
sayHiBye("Brendan", "Eich");

// A nested function can be returned: either as a property of a new object or as
// a result by itself. It can then be used somewhere else. No matter where, it
// still has access to the same outer variables:
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2
