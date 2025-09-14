// Usually, a function remembers where it was born in the special property
// `[[Environment]]`. It references the Lexical Environment from where it's
// created. But when a function is created using `new Function`, its
// `[[Environment]]` is set to reference not the current Lexical Environment,
// but the global one. So, such function doesn't have access to outer variables,
// only to the global ones.

// Regular behavior:
{
    function getFunc() {
        let value = "test";

        let func = function () {
            alert(value);
        };

        return func;
    }

    getFunc()(); // "test", from the Lexical Environment of getFunc
}

// With `new Function`:
{
    function getFunc() {
        let value = "test";

        let func = new Function("alert(value)");

        return func;
    }

    getFunc()(); // error: value is not defined
}

// This special feature of new Function looks strange, but appears very useful
// in practice. We may receive this function from the server or from another
// source. Our new function needs to interact with the main script.
// This wouldn't work with minifiers.
