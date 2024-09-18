"use strict";

let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  alert("Hello!");
};

user.sayHi(); // Hello!

// first, declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!

user = {
  sayHi: function () {
    alert("Hello");
  },
};

// method shorthand
user = {
  // same as "sayHi: function() {...}"
  sayHi() {
    alert("Hello");
  },
};

user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  },
};

user.sayHi(); // John

user = {
  name: "John",
  age: 30,

  sayHi() {
    // "user" instead of "this"
    alert(user.name);
  },
};

let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read properties of null (reading 'name')

user = { name: "John" };
admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John (this == user)
admin.f(); // Admin (this == admin)

admin["f"](); // Admin (dot or square brackets access the method - doesn't matter)

function sayHi() {
  alert(this);
}

sayHi(); // undefined

user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // Ilya
