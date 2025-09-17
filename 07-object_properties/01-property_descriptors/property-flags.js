// Object properties, besides a `value`, have three special attributes
// (so-called "flags"):
// 1. `writable`: if `true`, the value can be changed, otherwise it's read-only.
// 2. `enumerable`: if `true`, then listed in loops, otherwise not listed.
// 3. `configurable`: if `true`, the property can be deleted and these
//    attributes can be modified, otherwise not.
// By default, they're all `true` for a property.

// This method allows to query the full information about a property:
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
//
// - `obj`: The object to get information from.
// - `propertyName`: The name of the property.
// The returned value is a so-called "property descriptor" object: it contains
// the value and all the flags.
{
    let user = {
        name: "John",
    };

    let descriptor = Object.getOwnPropertyDescriptor(user, "name");
    alert(JSON.stringify(descriptor, null, 4));
    /* property descriptor:
        {
            "value": "John",
            "writable": true,
            "enumerable": true,
            "configurable": true
        }
    */
}
// To change the flags, we can use:
// Object.defineProperty(obj, propertyName, descriptor);
//
// - `obj`, `propertyName`: The object and its property to apply the descriptor.
// - `descriptor`: Property descriptor object to apply.
//
// If the property exists, `defineProperty` updates its flags. Otherwise, it
// creates the property with the given value and flags; in that case, if a flag
// is not supplied, it is assumed `false`.
{
    let user = {};

    Object.defineProperty(user, "name", {
        value: "John",
    });

    let descriptor = Object.getOwnPropertyDescriptor(user, "name");
    alert(JSON.stringify(descriptor, null, 4));
    /*
    {
        "value": "John",
        "writable": false,
        "enumerable": false,
        "configurable": false
    }
    */
}
