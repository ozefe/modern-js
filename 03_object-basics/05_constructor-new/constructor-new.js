function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

// create a function and immediately call it with new
user = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc.
})();

function User() {
  alert(new.target);
}

// without "new"
User(); // undefined

// with "new"
new User(); // function User() {...}

function User(name) {
  // if you run me without new
  if (!new.target) {
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new user
alert(john.name); // John

function BigUser() {
  this.name = "John";

  return { name: "Godzilla" }; // <-- returns this object
}

alert(new BigUser().name); // Godzilla, got that object

function SmallUser() {
  this.name = "John";

  return; // <-- returns this
}

alert(new SmallUser().name); // John

function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert(`My name is: ${this.name}`);
  };
}

john = new User("John");
john.sayHi(); // My name is: John
