// Just like literal objects, classes may include getters/setters, computed
// properties, etc.

// Technically, such class declaration works by creating getters and setters in
// `User.prototype`.
class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert(`Name (${value}) is too short.`);
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
alert(user.name); // John

user = new User("Ada"); // Name (Ada) is too short.
