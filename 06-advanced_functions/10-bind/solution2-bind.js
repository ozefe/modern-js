// Functions provide a built-in method `bind` that allows to fix `this`. The
// basic syntax is:
// let boundFunc = func.bind(context);
//
// The result of `func.bind(context)` is a special function-like "exotic
// object", that is callable as function and transparently passes the call to
// `func` setting `this=context`. In other words, calling `boundFunc` is like
// `func` with fixed `this`.
{
    let user = {
        firstName: "John",
    };

    function func() {
        alert(this.firstName);
    }

    // Here `funcUser` is a "bound variant" of `func`, with fixed `this=user`.
    let funcUser = func.bind(user);
    funcUser(); // John
}

// All arguments are passed to the original `func` "as is":
{
    let user = {
        firstName: "John",
    };

    function func(phrase) {
        alert(`${phrase}, ${this.firstName}`);
    }

    // bind this to `user`
    let funcUser = func.bind(user);

    // argument `"Hello"` is passed, and `this=user`
    funcUser("Hello"); // Hello, John
}

// With an object method:
{
    let user = {
        firstName: "John",
        sayHi() {
            alert(`Hello, ${this.firstName}!`);
        },
    };

    // We take the method `user.sayHi` and bind it to `user`. The `sayHi` is a
    // "bound" function, that can be called alone or passed to `setTimeout` --
    // doesn't matter, the context will be right.
    let sayHi = user.sayHi.bind(user);

    // can run it without an object
    sayHi(); // Hello, John!

    setTimeout(sayHi, 1000); // Hello, John!

    // even if the value of `user` changes within 1 second `sayHi`  uses the
    // pre-bound value which is reference to the old `user` object
    user = {
        sayHi() {
            alert("Another user in setTimeout!");
        },
    };
}

// Here we can see that arguments are passed "as is", only `this` is fixed by
// `bind`:
{
    let user = {
        firstName: "John",
        say(phrase) {
            alert(`${phrase}, ${this.firstName}!`);
        },
    };

    let say = user.say.bind(user);

    say("Hello"); // Hello, John! ("Hello" argument is passed to say)
    say("Bye"); // Bye, John! ("Bye" is passed to say)
}

// NOTE: Convenience method: `bindAll`: If an object has many methods and we
// plan to actively pass it around, then we could bind them all in a loop:
// for (let key in user) {
//     if (typeof user[key] == "function") {
//         user[key] = user[key].bind(user);
//     }
// }
