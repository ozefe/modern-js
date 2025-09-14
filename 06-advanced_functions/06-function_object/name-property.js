// Function objects contain some useable properties. For instance, a function's
// name is accessible as the `name` property:
{
    function sayHi() {
        alert("Hi");
    }
    alert(sayHi.name); // sayHi
}
// The name-assigning logic is smart. It also assigns the correct name to a
// function even if it's created without one, and then immediately assigned:
{
    let sayHi = function () {
        alert("Hi");
    };
    alert(sayHi.name); // sayHi (there's a name!)
}

// It also works if the assignment is done via a default value:
function f(sayHi = function () {}) {
    alert(sayHi.name); // sayHi (works!)
}
f();

// In the specification, this feature is called a "contextual name". If the
// function does not provide one, then in an assignment it is figured out from
// the context.

// Object methods have names too:
let user = {
    sayHi() {
        // ...
    },

    sayBye: function () {
        // ...
    },
};
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// There are cases when there's no way to figure out the right name. In that
// case, the `name` property is empty:
// function created inside array
let arr = [function () {}];

// the engine has no way to set up the right name, so there is none
alert(arr[0].name); // <empty string>
