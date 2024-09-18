let message = "Hello!";
let phrase = message;

let user = {
  name: "John",
};
let admin = user; // copy the reference

admin.name = "Pete"; // changed by the "admin" reference
alert(user.name); // "Pete", changes are seen from the "user" reference

let a = {};
let b = a; // copy the reference

alert(a == b); // true, both variables reference the same object
alert(a === b); // true

a = {};
b = {}; // two independent objects

alert(a == b); // false

const userConst = {
  name: "John",
};

userConst.name = "Pete";
alert(userConst.name); // Pete

user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let prop in user) {
  clone[prop] = user[prop];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert(user.name); // still "John" in the original object

user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = {name: "John", canView: true, canEdit: true}
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // "Pete"

user = {
  name: "John",
  age: 30,
};

clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30

user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

alert(user.sizes.height); // 182

clone = Object.assign({}, user);

alert(user.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width = 60; // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one

user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

clone = structuredClone(user);

alert(user.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;
alert(clone.sizes.width); // 50, not related

user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

clone = structuredClone(user);
alert(clone.me === clone); // true

// error
structuredClone({ f: function () {} });
