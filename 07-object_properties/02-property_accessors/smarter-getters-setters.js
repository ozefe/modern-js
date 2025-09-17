// Getters/setters can be used as wrappers over "real" property values to gain
// more control over operations with them.
let user = {
    get name() {
        return this._name;
    },

    // We want to forbid too short names for `user`, we can have a setter `name`
    // and keep the value in a separate property `_name`:
    set name(value) {
        if (value.length < 4) {
            alert(`Name (${value}) is too short, need at least 4 characters`);
            return;
        }
        this._name = value;
    },

    // So, the name is stored in `_name` property, and the access is done via
    // getter and setter.
    //
    // Technically, external code is able to access the `name` directly by using
    // `user._name`. But there is a widely known convention that properties
    // starting with an underscore "_" are internal and should not be touched
    // from outside the object.
};

user.name = "Pete";
alert(user.name); // Pete

user.name = "Ada"; // Name is too short...
