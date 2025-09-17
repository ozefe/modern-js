// Property descriptors work at the level of individual properties. There are
// also methods that limit access to the whole object:
obj = {};

// Forbids the addition of new properties to the object.
Object.preventExtensions(obj);

// Forbids adding/removing of properties. Sets `configurable: false` for all
// existing properties.
Object.seal(obj);

// Forbids adding/removing/changing of properties. Sets `configurable: false`
// and `writable: false` for all existing properties.
Object.freeze(obj);

// And also there are tests for them:

// Returns `false` if adding properties is forbidden, otherwise `true`.
alert(Object.isExtensible(obj));

// Returns `true` if adding/removing properties is forbidden, and all existing
// properties have `configurable: false`.
alert(Object.isSealed(obj));

// Returns `true` if adding/removing/changing properties is forbidden, and all
// current properties are `configurable: false` and `writable: false`.
alert(Object.isFrozen(obj));
