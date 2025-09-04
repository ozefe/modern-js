// Inside a function, we can check whether it was called with `new` or without
// it, using a special `new.target` property. It is `undefined` for regular
// calls and equals the function if called with `new`:
function User() {
    alert(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }

function UserWithRedirect(name) {
    // if you run me without new
    if (!new.target) {
        return new UserWithRedirect(name); // ...I will add new for you
    }

    this.name = name;
}

let john = UserWithRedirect("John"); // redirects call to new User
alert(john.name); // John
