let x = 1;

function func() {
    alert(x); // ReferenceError: Cannot access 'x' before initialization

    // the local variable `x` is known to the engine from the beginning of the
    // function, but "uninitialized" (unusable) until `let` ("dead zone") hence
    // the error

    let x = 2;
}

func();
