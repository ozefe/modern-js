"use strict";

function Constructor() {
    this.testData = "This is a test data";
}

let obj = new Constructor();
alert(`obj: ${obj.testData}`);

// Creating another object but not using `Constructor` constructor directly:
let obj2 = new obj.constructor();
alert(`obj2: ${obj2.testData}`);
