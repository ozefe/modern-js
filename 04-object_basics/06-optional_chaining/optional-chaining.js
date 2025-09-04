// The optional chaining ?. stops the evaluation if the value before ?. is
// `undefined` or `null` and returns `undefined`.
let user = {}; // user has no address

alert(`User street: ${user?.address?.street}`); // undefined (no error)

// Reading the address with `user?.address` works even if `user` object doesn't
// exist:
user = null;

alert(`User address: ${user?.address}`); // undefined
alert(`User street: ${user?.address.street}`); // undefined

// NOTE: The variable before ?. must be declared. If there's no variable `user`
// at all, then `user?.anything` triggers an error:
noUser?.address; // ReferenceError: noUser is not defined
