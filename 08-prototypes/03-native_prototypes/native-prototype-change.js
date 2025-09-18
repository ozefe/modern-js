// Native prototypes can be modified. For instance, if we add a method to
// `String.prototype`, it becomes available to all strings:
String.prototype.show = function () {
    alert(this);
};

"BOOM!".show(); // BOOM!

// NOTE: Prototypes are global, so it's easy to get a conflict. If two libraries
// add a method `String.prototype.show`, then one of them will be overwriting
// the method of the other. So, generally, modifying a native prototype is
// considered a bad idea.

// In modern programming, there is only one case where modifying native
// prototypes is approved: polyfilling.
//
// We may implement a substitute for a method that exists in the JavaScript
// specification, but is not yet supported by a particular JavaScript engine
// manually and populate the built-in prototype with it:

// if there's no such method, add it to the prototype
if (!String.prototype.repeat) {
    // repeat the string n times
    String.prototype.repeat = function (n) {
        // actually, the code should be a little bit more complex than that (the
        // full algorithm is in the specification) but even an imperfect
        // polyfill is often considered good enough
        return new Array(n + 1).join(this);
    };
}

alert("La".repeat(3)); // LaLaLa
