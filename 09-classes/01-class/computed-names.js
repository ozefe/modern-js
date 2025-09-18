// Here's an example with a computed method name using brackets `[...]`:
class User {
    // This is really weird...
    ["say" + "Hi"]() {
        alert("Hello");
    }
}

new User().sayHi();
