// There is another built-in property `length` that returns the number of
// function parameters:
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2

// we can see that rest parameters are not counted.
alert(many.length); // 2

// The `length` property is sometimes used for introspection in functions that
// operate on other functions:
// this function accepts a `question` to ask and an arbitrary number of
// `handler` functions to call. Once a user provides their answer, the function
// calls the handlers. We can pass two kinds of handlers:
//   1. A zero-argument function, which is only called when the user gives a
//      positive answer.
//   2. A function with arguments, which is called in either case and returns an
//      answer.
// The idea is that we have a simple, no-arguments handler syntax for positive
// cases (most frequent variant), but are able to support universal handlers as
// well:
function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        // To call `handler` the right way, we examine the `handler.length`
        // property:
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }
}

// for positive answer, both handlers are called
// for negative answer, only the second one
ask(
    "Question?",
    () => alert("You said yes"),
    (result) => alert(result)
);

// This is a particular case of so-called polymorphism -- treating arguments
// differently depending on their type or, in our case depending on the length.
// The idea does have a use in JavaScript libraries.
