// New language features may include not only syntax constructs and operators,
// but also built-in functions. A script that updates/adds new functions is
// called "polyfill". It "fills in" the gap and adds missing implementations.
if (!Math.trunc) {
    // if no such function, implement it
    Math.trunc = function (number) {
        // Math.ceil and Math.floor exist even in ancient JavaScript engines
        return number < 0 ? Math.ceil(number) : Math.floor(number);
    };
}
alert(Math.trunc(1.23) === 1);
