// Primitives like strings, numbers and booleans are not objects. But if we try
// to access their properties, temporary wrapper objects are created using
// built-in constructors `String`, `Number` and `Boolean`. They provide the
// methods and disappear.
//
// These objects are created invisibly to us and most engines optimize them out,
// but the specification describes it exactly this way. Methods of these objects
// also reside in prototypes, available as `String.prototype`,
// `Number.prototype` and `Boolean.prototype`.

// NOTE: Values `null` and `undefined` have no object wrappers: They have no
// object wrappers, so methods and properties are not available for them. And
// there are no corresponding prototypes either.
