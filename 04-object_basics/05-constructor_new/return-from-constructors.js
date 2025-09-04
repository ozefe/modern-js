// If there is a return statement, then the rules are:
//   1. If return is called with an object, then the object is returned instead
//      of `this`.
//   2. If return is called with a primitive, it's ignored.
function BigUser() {
    this.name = "John";

    return { name: "Godzilla" }; // <-- returns this object
}
alert(new BigUser().name); // Godzilla, got that object

function SmallUser() {
    this.name = "John";

    return; // <-- returns `this`
}
alert(new SmallUser().name); // John
