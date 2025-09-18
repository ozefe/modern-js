// Just like functions, classes can be defined inside another expression, passed
// around, returned, assigned, etc.

// Class expression:
{
    let User = class {
        sayHi() {
            alert("Hello");
        }
    };
}

// Similar to Named Function Expressions, class expressions may have a name. If
// a class expression has a name, it's visible inside the class only:
{
    // Named Class Expression
    let User = class MyClass {
        sayHi() {
            alert(MyClass); // `MyClass` name is visible only inside the class
        }
    };

    new User().sayHi(); // works, shows `MyClass` definition
    // alert(MyClass); // ReferenceError: MyClass is not defined
}

// We can even make classes dynamically "on-demand":
{
    function makeClass(phrase) {
        // declare a class and return it
        return class {
            sayHi() {
                alert(phrase);
            }
        };
    }

    // Create a new class
    let User = makeClass("Hello");
    new User().sayHi(); // Hello
}
