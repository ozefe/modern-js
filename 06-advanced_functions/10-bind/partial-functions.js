// We have only been talking about binding `this`. We can bind not only `this`,
// but also arguments. The full syntax of `bind`:
// let bound = func.bind(context, [arg1], [arg2], ...);
//
// It allows to bind `context` as `this` and starting arguments of the function.
function mul(a, b) {
    return a * b;
}

// Using `bind` to create a function `double` on its base:
let double = mul.bind(null, 2);
// This call creates a new function `double` that passes calls to `mul`, fixing
// `null` as the context and `2` as the first argument. Further arguments are
// passed "as is". This is called partial function application: we create a new
// function by fixing some parameters of the existing one.

alert(double(3)); // = mul(2, 3) = 6
alert(double(4)); // = mul(2, 4) = 8
alert(double(5)); // = mul(2, 5) = 10

// The benefit of making partial functions is that we can create an independent
// function with a readable name (`double`, `triple`). We can use it and not
// provide the first argument every time as it’s fixed with `bind`.
//
// In other cases, partial application is useful when we have a very generic
// function and want a less universal variant of it for convenience. For
// instance, we have a function `send(from, to, text)`. Then, inside a `user`
// object we may want to use a partial variant of it: `sendTo(to, text)` that
// sends from the current `user`.
