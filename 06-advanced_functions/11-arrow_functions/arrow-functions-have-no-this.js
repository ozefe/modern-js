"use strict";

// Arrow functions do not have `this`. If `this` is accessed, it is taken from
// the outside. We can use it to iterate inside an object method:
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        // We're using the arrow function, so `this.title` in it is exactly the
        // same as in the outer method `showList`. That is: `group.title`.
        this.students.forEach((student) => alert(`${this.title}: ${student}`));

        // If we used a "regular" function, there would be an error:
        this.students.forEach(function (student) {
            // Error: Cannot read property 'title' of undefined. The error
            // occurs because `forEach` runs functions with `this=undefined` by
            // default, so the attempt to access `undefined.title` is made.
            alert(`${this.title}: ${student}`);
        });
    },
};
group.showList();

// NOTE: Arrow functions can't run with `new`: Not having `this` naturally means
// another limitation: arrow functions can't be used as constructors. They can't
// be called with `new`.

// NOTE: Arrow functions VS bind: There's a subtle difference between an arrow
// function and a regular function called with `.bind(this)`:
// - `.bind(this)` creates a "bound version" of the function.
// - The arrow function doesn't create any binding. The function simply doesn't
//   have `this`. The lookup of `this` is made exactly the same way as a regular
//   variable search: in the outer lexical environment.
