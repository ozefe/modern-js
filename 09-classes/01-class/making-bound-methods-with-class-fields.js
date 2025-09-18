// Functions in JavaScript have a dynamic `this`, which depends on the context
// of the call. So if an object method is passed around and called in another
// context, `this` won't be a reference to its object anymore.
{
    class Button {
        constructor(value) {
            this.value = value;
        }

        click() {
            alert(this.value);
        }
    }

    let button = new Button("hello");

    setTimeout(button.click, 1000); // undefined
}

// There are two approaches to fixing it:
// 1. Pass a wrapper-function, such as `setTimeout(() => button.click(), 1000)`.
// 2. Bind the method to object, e.g. in the `constructor`.
//
// Class fields provide another, quite elegant syntax:
{
    class Button {
        constructor(value) {
            this.value = value;
        }

        // This class field is created on a per-object basis, there's a separate
        // function for each `Button` object, with `this` inside it referencing
        // that object. We can pass `button.click` around anywhere, and the
        // value of `this` will always be correct.
        click = () => {
            alert(this.value);
        };
    }

    let button = new Button("hello");

    setTimeout(button.click, 1000); // hello
}
